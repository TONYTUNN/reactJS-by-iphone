var express = require('express');
var router = express.Router();
var mysql = require('mysql');
const jwt = require('jsonwebtoken');
const fs = require('fs');
const PRIVATE_KEY = fs.readFileSync('private-key.txt');
var db = mysql.createConnection({
    host : 'localhost', user: 'root', password : '', database : 'laptop_react'
});
db.query(() => console.log("Đã kết nối database user thành công !"));
module.exports = router;

router.post('/login',(req,res)=>{
    const un = req.body.un;
    const pw = req.body.pw;
    if(checkUserPass(un,pw)){
        const userInfo = getUserInfo(un);
        const jwtBearerToken = jwt.sign({},
            PRIVATE_KEY, {algorithm: 'RS256', expiresIn : 120 , subject : userInfo.id}
        )
        res.status(200).json({token : jwtBearerToken , expiresIn : 120 , userInfo : userInfo})
    }
    else res.status(401).json({"Thông báo" : "Bạn đăng nhập thất bại !"})
    
})

 checkUserPass = (un,pw) => {
    if(un == 'admin1' && pw == '123') {return true}
    if(un == 'admin2' && pw == '123') {return true}
    return false;
 }

 getUserInfo = (username) =>{
    if(username == 'admin1') return {"id":"1", hoten : "Nguyễn Văn Tuấn"};
    if(username == 'admin2') return {"id":"2", hoten : "Phạm Ngọc Tuyến"};
    return {"id":"-1","Họ tên" : ""}
 }
 module.exports = router;

