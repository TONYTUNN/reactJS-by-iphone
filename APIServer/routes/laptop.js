var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var db = mysql.createConnection({
    host:'localhost', user: 'root', password:'',database:'laptop_react'
});
db.connect(()=>console.log('Đã kết nối database sản phẩm thành công !'));
module.exports = router;

router.get('/moi/:sosp?',(req,res)=>{
    let sosp  = parseInt(req.params.sosp || 1);
    if(sosp<=1) sosp=1;
    let sql = `SELECT id_sp, ten_sp, gia , hinh , ngay , soluotxem FROM sanpham ORDER BY ngay desc LIMIT 0,?`;
    db.query(sql,sosp,(err,data)=>{
        if(err) res.json({"thongbao":"Lỗi lấy líst sản phẩm !",err})
        else res.json(data);
    })
})
module.exports = router;

router.get('/sp/:id',(req,res)=>{
    let id = parseInt(req.params.id);
    if(id<=0){
        res.json({"Thông báo":" Không biết sản phẩm ","id":id});
        return;
    }
    let sql = `SELECT * FROM sanpham WHERE id_sp = ?`;
    db.query(sql,id,(err,data)=>{
        if(err) res.json({"Thông báo":"Lỗi lấy 1 sp",err})
        else res.json(data[0]);
    })
})
module.exports = router;

router.get('/sptrongloai/:id_loai',(req,res)=>{
    let id_loai = parseInt(req.params.id_loai);
    if(id_loai<=0){
        res.json({"Thông báo ":"Không biết loại ","id_loại":id_loai});
        return;
    }
    let sql = `SELECT  id_sp, ten_sp, gia, hinh, ngay FROM sanpham WHERE id_loai =? ORDER BY id_sp desc`;
    db.query(sql,id_loai,(err,data)=>{
        if(err) res.json({"Thông báo": "Lỗi lấy sp trong loại",err})
        else res.json(data);
    })
});

router.get('/loai/:id_loai',(req,res)=>{
    let id_loai = parseInt(req.params.id_loai);
    let sql = `SELECT id_loai,ten_loai FROM loai WHERE id_loai`;
    db.query(sql,id_loai,(err,data)=>{
        if(err) res.json({"thông báo":"Lỗi lấy loại",err})
        else res.json(data[0]);
    })
})

router.post('/luudonhang/',(req,res)=>{
    let data = req.body;
    let sql = `INSERT INTO don_hang SET ?`;
    db.query(sql,data,(err,data)=>{
        if(err) {
            res.json({"id_dh":id_dh,"Thông báo" :"Lỗi lưu đơn hàng",err});
        }else{
            id_dh = data.insertId
            res.json({"id_dh":id_dh,"Thông báo ":"Đã lưu đơn hàng"});
        }
    });
})

router.post('/luugiohang',(req,res)=>{
    let data = req.body;
    let sql = `INSERT INTO don_hang_chi_tiet SET ?`;
    db.query(sql,data,(err,d)=>{
        if(err)
            res.json({"Thông báo":"Lỗi lưu sp",err})
        else
            res.json({"Thông báo":"Đã lưu sp vào data","id_sp":data.id_sp});
        
    })
})