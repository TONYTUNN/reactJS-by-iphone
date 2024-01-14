import React from "react";
import { useSelector } from "react-redux";
import { xoaSP } from "./cartSlice";
import { useDispatch } from "react-redux";
function ThanhToan(){
    const dispatch = useDispatch();
    let htRef = React.createRef();
    let emRef = React.createRef();
    const cart = useSelector(state => state.cart.listSP);
    const submitDuLieu = () =>{
        let ht = htRef.current.value;
        let em = emRef.current.value;
      
        if(ht === "" || em === ""){
            alert(" Nhập đủ thông tin bạn ơi");
            return;
        }
        if(cart.length === 0 ){
            alert("Bạn chưa chọn sản phẩm nào");
            return;
        }
        let url = "http://localhost:4000/laptop/luudonhang";
        let tt = {ho_ten:htRef.current.value,email:emRef.current.value}
        var opt = {
            method:"post",
            body:JSON.stringify(tt),
            headers:{'Content-Type':'application/json'}
        }
        fetch(url,opt).then(res =>res.json()).then(data => {
            if(data.id_dh<0) console.log("Lỗi lưu đơn hàng",data)
            else {
                let id_dh = data.id_dh;
                // console.log()
                alert("Đã lưu đơn hàng");
                luuchitietdonhang(id_dh,cart);
            }
        });
    }
    const luuchitietdonhang =( id_dh,cart) =>{
        let url = "http://localhost:4000/laptop/luugiohang";
        cart.forEach(sp =>{
            let t = {id_dh:id_dh,id_sp:sp.id_sp,so_luong:sp.soluong}
            let opt = {
                method : "post",
                body :JSON.stringify(t),
                headers : {'Content-Type':'application/json'}
            }
            fetch(url,opt).then(res => res.json()).then(data => luuxongsp(data)).catch(err => console.log("Lỗi lưu sp",sp));
        });
        const luuxongsp = (data) =>{
            console.log(data);
            dispatch( xoaSP(data.id_sp) ) ;
        }
        // console.log("Sẽ gửi lên server id_dh = ", id_dh);
        // console.log("Sẽ gửi lên server cart ",cart);
    }
    return(
        <form id="frmthanhtoan">
            <h2>Thanh toán hóa đơn</h2>
            <div>
                <label>Họ Tên</label>
                <input type="text" ref={htRef}/>
            </div>
            <div>
                <label>Email</label>
                <input type="email" ref={emRef}/>
            </div>
            <div>
                <button type="button" onClick={()=>submitDuLieu()}>Lưu đơn hàng</button>
            </div>
        </form>
    )
}
export default ThanhToan;