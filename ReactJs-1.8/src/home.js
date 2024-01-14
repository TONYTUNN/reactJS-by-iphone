
import { Link } from "react-router-dom";
// import { listsp } from "./data";
import { useState,useEffect } from "react";
import { useDispatch } from "react-redux";
import { themSP } from "./cartSlice";
function Home(){
    const dispatch = useDispatch();
    const [listsp,ganListSP] = useState([]);
    useEffect(()=>{
    fetch('http://localhost:4000/laptop/moi/9')
    .then(res => res.json()).then(data => ganListSP(data));
})
    return(
        <div className="home">
            {listsp.slice(0,9).map((sp,i)=>
            <div className="sp" key={i}>
                {/* <h4>{sp['ten_sp']}</h4> */}
                <h4><Link to={ "/sp/" + sp.id_sp } > {sp['ten_sp']} </Link></h4>
                <img src={sp['hinh']} alt={sp['ten_sp']}/>
                <a id="btn-add" href="/#" onClick={()=> dispatch(themSP(sp))}>Thêm vào giỏ hàng</a>
            </div>
            )}
        </div>
    )
}
export default Home;