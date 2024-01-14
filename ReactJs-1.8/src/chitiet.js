import { useParams } from "react-router-dom";
import { useEffect,useState } from "react";
// import { listsp } from "./data";
function ChiTiet(){
    let {id} = useParams();
    // let sp = listsp[id];
    const [sp,ganSP] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:4000/laptop/sp/'+ id)
        .then(res=>res.json()).then(data => ganSP(data));
    },[id]);
 
    return(
        <div id="chitiet">
            <div id="row1">
                <div id="trai">
                    <img src={sp['hinh']} alt={sp['ten_sp']}/>
                </div>
                <div id="phai">
                <h1 className="h3">{sp['ten_sp']}</h1>
                <p><span>Giá </span>: {Number(sp['gia']).toLocaleString("vi")} VND</p>
                <p><span>Giá KM </span>: {Number(sp['gia_km']).toLocaleString("vi")} VND</p>
                <p><span>Ngày</span>:{new Date(sp['ngay']).toLocaleString("vi-VN")}</p>
             
                </div>
            </div>
        </div>
    )
}
export default ChiTiet;