var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var db = mysql.createConnection({
    host : 'localhost', user: 'root', password : '', database : 'laptop_react'
});
db.query(() => console.log("Đã kết nối database admin thành công !"));
module.exports = router;
// 
router.get('/',(req,res)=>{
    let sql = `SELECT id_sp, ten_sp , gia , hinh , ngay , soluotxem FROM sanpham ORDER BY ngay desc `;
    db.query(sql,(err,data)=>{
        if(err) res.json({"Thông báo":"Lỗi lấy list sp",err})
        else res.json(data);
    })
}
)
module.exports = router;
// 
router.get('/:id',(req,res)=>{
    let id = parseInt(req.params.id);
    if(id<=0){
        res.json({"Thông báo":"Không biết sản phẩm","id":id});
        return;
    }
    let sql = `SELECT * FROM sanpham WHERE id_sp = ? `;
    db.query(sql,id,(err,data)=>{
        if(err) res.json({"Thông báo":"Lỗi lấy 1 sp",err})
        else res.json(data[0]);
    })
})
// 

router.get('/loaisp/',(req,res)=>{
    let sql = `SELECT * FROM loai`;
    db.query(sql,(err,data)=>{
      if(err) res.json({"Thong bao" : "Loi lay list loai",err})
      else res.json(data);
    })
  })
  module.exports = router;
// 
router.post('/loai/',(req,res)=>{
    let data = req.body;
    let sql =  `INSERT INTO loai  SET ?`
    db.query(sql, data,(err,data)=>{
        if(err) res.json({"Thông báo":" Nhập thông tin loại thất bại",err})
        else res.json({"Thông báo":"Đã chèn 1 sp","id_sp": data.insertId})
    })
})
// 
router.post('/',(req,res)=>{
    let data = req.body;
    let sql = `INSERT INTO sanpham SET ? `;
    db.query(sql,data,(err,data)=>{
        if(err) res.json({"Thông báo":"Lỗi chèn 1 sp",err});
        else res.json({"Thông báo":" Đã chèn 1 sp"," id_sp": data.insertId});
    })
})
module.exports = router;
// 
router.post('/loaisp/',(req,res)=>{
    let data = req.body;
    let sql = `INSERT INTO loai SET ? `;
    db.query(sql,data,(err,data)=>{
        if(err) res.json({"Thông báo":"Lỗi thêm loại 1 sp",err});
        else res.json({"Thông báo":" Đã thêm loại 1 sp"," id_sp": data.insertId});
    })
})
module.exports = router;
// 
router.put('/:id_sp',(req,res)=>{
    let data = req.body;
    let id = req.params.id_sp;
    let sql =  `UPDATE sanpham SET ? WHERE id_sp = ?`;
    db.query(sql,[data,id],(err,d)=>{
        if(err) res.json({"Thông báo":"Lỗi cập nhật sp", err});
        else res.json({"Thông báo":" Đã cập nhật sp"});
    })
})
module.exports = router;
// 
router.delete('/:id_sp',(req,res)=>{
    let id = req.params.id_sp;
    let sql = `DELETE FROM sanpham WHERE id_sp = ?`;
    db.query(sql,id,(err,d)=>{
        if(err) res.json({"Thông báo":" Lỗi khi xóa sp",sp});
        else res.json({"Thông báo":"Đã xóa sp"});
    })
})
module.exports = router;
