import { useEffect,useState } from "react";
import { Link, useNavigate } from "react-router-dom";
function SanPhamList (){
    const [listSP,ganListSP] = useState([]);
    // const [loaiSP,ganListLoaiSP] = useState([]);
    const navigate = useNavigate();
    const xoaSP = (id) => {
        if(window.confirm('Bạn có muốn xóa sản phẩm này')=== false)
        return false;
    fetch('http://localhost:4000/adminsp/' +id,{method : 'delete'})
    .then(res => res.json()).then(data => navigate(0));
    }
    useEffect(()=>{
        fetch('http://localhost:4000/adminsp')
        .then(res => res.json())
        .then(data => {ganListSP(data); console.log(data)});
       
    },[]);
  //   useEffect(()=>{
  //     fetch('http://localhost:4000/loai/loaisp/')
  //     .then(res => res.json())
  //     .then(data => {ganListLoaiSP(data); console.log(data)});
     
  // },[]);
    return(
        <div id="adminspList">
    <h5 className='sp' key={0}>
      <b>Tên SP</b> <b>Ngày</b> <b>Giá</b> <b><a href="/admin/spthem">Thêm</a></b>
    </h5>
    {listSP.map( (sp, index) => (
    <div className='sp' key={sp.id_sp}>
        <span>{sp.ten_sp}</span>
        {/* <span>{
            loaiSP.map((sp,index)=>(
            <div>
            <span>{sp.ten_loai}</span>
            </div>
          ))
          }
        </span>  */}
        <span>{sp.ngay}</span> 
        <span>{sp.gia}</span>
        <span>
        <a href="#/" className='btn btn-danger' onClick={()=>xoaSP(sp.id_sp)}>Xóa</a>
          <Link to={"/admin/spsua/"+sp.id_sp} className='btn btn-primary' >Sửa</Link>
        </span>
    </div>
    ))}
    {/*  */}
   
</div>);
}
export default SanPhamList;