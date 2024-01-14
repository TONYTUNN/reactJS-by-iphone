function SanPhamThem(){
    let sp = {};
    const submitDuLieu = () =>{
        let url = " http://localhost:4000/adminsp";
        let opt = {
            method :"post",
            body: JSON.stringify(sp),
            headers : {'Content-Type':'application/json'}
        }
        fetch(url,opt).then(res => res.json()).then(data => {
            alert("Đã thêm ", data);
        })
    }
    return(
        <form>
            <h2 className="h4">Trang thêm sản phẩm</h2>
            <div className="row mb-3">
                <div className="col">
                    Tên <input type="text" className="form-control" onChange={e => sp.ten_sp = e.target.value}/>
                </div>
                <div className="col">
                    Giá <input type="number" className="form-control" onChange={e => sp.gia = e.target.value}/>
                </div>
                <div className="col">
                    Giá KM <input type="number" className="form-control" onChange={e => sp.gia_km = e.target.value}/>
                </div>
            </div>
            <div className="row mb-3">
                <div className="col">
                    Hình <input type="text" className="form-control" onChange={e => sp.hinh = e.target.value}/>
                </div>
                <div className="col">
                    Ngày <input type="date" className="form-control" onChange={e => sp.ngay = e.target.value}/>
                </div>
                <div className="col">
                    Lượt xem <input type="number" className="form-control" onChange={e => sp.soluotxem = e.target.value}/>
                </div>
            </div>
            <div className="row mb-3">
             <button className="btn btn-warning" type="button" onClick={()=> submitDuLieu()}>Thêm sản phẩm</button> &nbsp;
             <a href="/adminsp/sp" className="btn btn-info">Danh sách</a>
            </div>
        </form>
    )
}
export default SanPhamThem;