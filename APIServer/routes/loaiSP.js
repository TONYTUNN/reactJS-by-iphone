var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var db = mysql.createConnection({
    host : 'localhost', user: 'root', password : '', database : 'laptop_react'
});
db.query(() => console.log("Đã kết nối database loaiSP thành công !"));
module.exports = router;
//
router.get('/loaisp/',(req,res)=>{
    let sql = `SELECT * FROM loai`;
    db.query(sql,(err,data)=>{
      if(err) res.json({"Thong bao" : "Loi lay list loai",err})
      else res.json(data);
    })
  })
  module.exports = router;