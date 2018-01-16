/**
 * Created by Administrator on 2017/11/15.
 */
const express = require("express");
const logger=require("morgan");//日志
const bodyParser=require("body-parser");//post请求
const session=require("express-session");
const cookieParser=require("cookie-parser");
const path=require("path");


const route=require("./routes/luyou");

const  app=express();

app.use(logger("dev"));//日志输出

//视图引擎配置
app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");

//=======session and cookie==============================
app.use(cookieParser());
app.use(session({
    name:"demo140a",
    secret:"123123",
    cookie:{maxAge:300000},
    resave:true,
    rolling:true,
    saveUninitialized:true
}))

//post数据读取
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


app.use(route);


//静态资源
app.use(express.static(__dirname+"/public"));

app.listen(8888,()=>{
    console.log(("服务器8888启动"))
})