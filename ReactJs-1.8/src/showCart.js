import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { suaSL, xoaSP } from "./cartSlice";
import { Link } from "react-router-dom";
function ShowCart(props){
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart.listSP);
    return(
        <div id="giohang">
            <h2>Giỏ hàng của bạn</h2>
            {cart.map((sp,index)=>
            {
                return(
                    <div key={index}>
                        <span>{sp.ten_sp}</span>
                        <input type="number" defaultValue={sp.soluong} onClick={(e)=> dispatch(suaSL([sp.id_sp,e.target.defaultValue]))}/>
                        <span>{Number(sp.gia).toLocaleString("vi")} VND</span>
                        <span>{Number(sp.gia*sp.soluong).toLocaleString("vi")} VND</span>
                        <span><a href="/#" onClick={()=>dispatch(xoaSP(sp.id_sp))}>Xóa</a></span>
                        <Link to='/thanhtoan'>Thanh toán</Link>
                    </div>
                )
            }
            )}
        </div>
    )
}
export default ShowCart;