function ThemLoaiSP(){
    let sp = {};
    const submitDuLieu = () =>{
        let url = "http://localhost:4000/adminsp/loai/";
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
            <h2 className="h4">Trang thêm loại sản phẩm</h2>
            <div className="row mb-3">
                <div className="col">
                    Tên Loại<input type="text" className="form-control" onChange={e => sp.ten_sp = e.target.value}/>
                </div>
                <div className="col">
                    thứ tự <input type="number" className="form-control" onChange={e => sp.gia = e.target.value}/>
                </div>
          
            </div>
            <div className="row mb-3">
             <button className="btn btn-warning" type="button" onClick={()=> submitDuLieu()}>Thêm sản phẩm</button> &nbsp;
             <a href="/adminsp/sp" className="btn btn-info">Danh sách</a>
            </div>
        </form>
    )
}
export default ThemLoaiSP;