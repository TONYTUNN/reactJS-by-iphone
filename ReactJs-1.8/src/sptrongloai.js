import { Link, useParams } from "react-router-dom";
// import { listloai,listsp } from "./data";
import { useState,useEffect } from "react";
import ReactPaginate from 'react-paginate';
function SPTrongLoai() {
  let {id_loai} = useParams();
  // let list_sp = listsp.filter(sp => sp.id_loai === id_loai);
  // let loai = listloai.find(loai => loai.id_loai === id_loai);
  const [list_sp,ganListSP] = useState([]);
  const [loai,ganloai] = useState("");
  useEffect(()=>{
    fetch('http://localhost:4000/laptop/sptrongloai/'+ id_loai).then(res=>res.json()).then(data => ganListSP(data));
    fetch('http://localhost:4000/laptop/loai/'+id_loai).then(res =>res.json()).then(data => ganloai(data));
  },[id_loai]);
  //
  function PhanTrang({ pageSize }) {
    const [fromIndex, setfromIndex] = useState(0);
    const toIndex = fromIndex + pageSize;
    const spTrong1Trang = list_sp.slice(fromIndex, toIndex);
    const tongSoTrang = Math.ceil(list_sp.length / pageSize);
    const chuyenTrang = (event) => {
      const newIndex = (event.selected * pageSize) % list_sp.length;
      setfromIndex(newIndex);
    };
    return (<>
        <HienSPTrongMotTrang spTrongTrang={spTrong1Trang} />
        <ReactPaginate nextLabel=">" previousLabel="<"
          pageCount={tongSoTrang} pageRangeDisplayed={5}
          onPageChange={chuyenTrang} renderOnZeroPageCount={null}
          className="thanhphantrang" />
      </>);
  }//PhanTrang
  // 

  // 
  function HienSPTrongMotTrang({spTrongTrang}){
    return(
      <div id="data">
        {spTrongTrang.map((sp,index)=>
        {
          return(
            <div className="sp" key={index}>
              <h4><Link to={"/sp/"+sp.id_sp}>{sp['ten_sp']}</Link></h4>
              <img src={sp['hinh']} alt={sp['ten_sp']}/>
            </div>
          )
        }
        )}
      </div>
    )
  }
  // 
  return (
  
    <div id="listsp">
    <h1>SP trong loai {loai['ten_loai']}</h1>
    <PhanTrang pageSize ={6}/>
    </div>
  )}
  export default SPTrongLoai;
  