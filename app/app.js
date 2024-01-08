"use strict"

//모듈
const express = require('express');
const app = express();

//앱세팅
app.set("views","./src/views");
app.engine('html', require('ejs').renderFile);
app.set("view engine","html");


//라우팅
const home = require("./src/routes/home");
app.use("/", home); //=> 미들웨어 등록해주는 메서드

module.exports = app;



