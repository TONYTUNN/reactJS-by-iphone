import React from "react";
import { listloai } from "./data";
import { Link } from "react-router-dom";
class Menu extends React.Component{
    render(){

        return(
            <ul>
                <li>
              
                    <Link className="nav-link"  to={"/"}>Home</Link>
                    </li>
                {listloai.map((loai, i) => (
                    <li key={i}>
                 
                        <Link className="nav-link"  to={"/loai/"+ loai.id_loai}>
                            {loai.ten_loai}
                        </Link>
                    </li>
                ))}
                <li>
                    <Link className="nav-link"  to={"/gioithieu"}>Giới Thiệu</Link>
                </li>
                <li>
                    <Link className="nav-link"  to={"/showcart"}>Giỏ hàng</Link>
                </li>
                <li>
                    <Link  className="nav-link"  to={"/adminsp"}>Quản ly sản phẩm </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to={"/dangnhap"} >Đăng nhập</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to={"/download"} >Download</Link>
                </li>
            </ul>
        );
        
    }
}
// ///////////////////

export default Menu;