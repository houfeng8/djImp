/**
 * Created by Administrator on 2017/11/1.
 */
const express=require("express");
const AV=require('leancloud-storage');
const loginDao= require("../dao/loginDao");



const APP_ID = 'gWVB2i4s7ewbiaTTaVc9h3od-gzGzoHsz';
const APP_KEY = 'dhtb3ToTaMIcS9D2f7cUoiQu';
//模块初始化
AV.init({
    appId: APP_ID,
    appKey: APP_KEY
});

const smsController={
    sencode(req,resp){
        console.log(req.body.phone);
        AV.Cloud.requestSmsCode({
            mobilePhoneNumber: req.body.phone,
            name: '国信安',
            op: '哈哈',
            ttl: 10                     // 验证码有效时间为 10 分钟
        }).then(function(){
            //调用成功
            resp.send("验证码发送成功")
        }, function(err){
            //调用失败
            resp.send("验证码发送失败，请检查手机号")
        });
    },
    yanzheng(req,resp){
        let phone=req.body.phone;
        AV.Cloud.verifySmsCode(req.body.code, req.body.phone).then(function(){
            //验证成功
            loginDao.iscunzai([phone]).then(data=>{
                console.log("控制岑判断是否存在",data);
                if(data.length==1){
                    resp.send(data)
                }else{
                    loginDao.zhuce([phone]).then(data=>{
                        console.log("控制层注册",data);
                        resp.send(data)
                    })

                }
            })
        }, function(err){
            //验证失败
            resp.send(err)
        });
    },

}

module.exports=smsController;