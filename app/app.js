"use strict"

//모듈
const express = require('express');
//const bodyParser = require("body-parser");
const app = express();

//라우팅
const home = require("./src/routes/home");

//앱세팅
app.set("views","./src/views");
app.engine('html', require('ejs').renderFile); //html 연결시 오류나서 추가
app.set("view engine","html");
app.use(express.static(`${__dirname}/src/public`)); //js html 연결위한 미들웨어 등록
app.use(express.json());

//url 통해 전달되는 데이터에 한글, 공백 같은 문자 포함시 제대로 인식되지 않는 문제 해결
app.use(express.urlencoded({ extended : true })); 

app.use("/", home); //=> 미들웨어 등록해주는 메서드

module.exports = app;



