/**
 * Created by Administrator on 2017/11/15.
 */
const mysql=require("mysql");
const dbpool = require("../config/dbpoolConfig.js");
const EditProfileDao={
    getProfile(params){
        return new Promise((resolve,reject)=>{
            dbpool.connect(" SELECT * FROM yd_user WHERE user_id = ?"
                ,params,(err,data)=>{
                    if(!err){
                        resolve(data);
                    }
                    else{
                        reject(err);
                    }
                });
        });
    },
    getMyOrder(user_id){
        return new Promise((resolve,reject)=>{
            dbpool.connect(" SELECT * FROM yd_order WHERE user_id = ?"
                ,[user_id],(err,data)=>{
                    if(!err){
                        resolve(data);
                    }
                    else{
                        reject(err );
                    }
                });
        });
    },
    UserAddress(user_id){
        return new Promise((resolve,reject)=>{
            dbpool.connect("SELECT * FROM yd_user_address WHERE user_id = ?"
                ,[user_id],(err,data)=>{
                    if(!err){
                        resolve(data);
                    }
                    else{
                        reject(err );
                    }
                });
        });
    },
    HeightCustomMade(user_id){
        return new Promise((resolve,reject)=>{
            dbpool.connect("SELECT * FROM yd_custom_made WHERE user_id = ?"
                ,[user_id],(err,data)=>{
                    if(!err){
                        resolve(data);
                    }
                    else{
                        reject(err );
                    }
                });
        });
    },
    //==========================轮播热图3张
    getIndex1(){
        return new Promise((resolve,reject)=>{
            dbpool.connect(" select * from yd_goods order by goods_id desc LIMIT 3",
                [],(err,data)=>{
                    if(!err){
                        resolve(data);
                    }
                    else{
                        reject(err);
                    }
                })
        });
    },
    //==========================4个场景图
    getIndex2(){
        return new Promise((resolve,reject)=>{
            dbpool.connect(" select * from yd_scene",
                [],(err,data)=>{
                    if(!err){
                        resolve(data);
                    }
                    else{
                        reject(err);
                    }
                })
        });
    },
    //==========================客厅主图
    getIndex3(){
        return new Promise((resolve,reject)=>{
            dbpool.connect("SELECT * FROM yd_goods  WHERE scene=1 ORDER BY sale_number LIMIT 4",
                [],(err,data)=>{
                    if(!err){
                        resolve(data);
                    }
                    else{
                        reject(err);
                    }
                })
        });
    },
    //==========================卧室主图
    getIndex4(){
        return new Promise((resolve,reject)=>{
            dbpool.connect(" SELECT * FROM yd_goods  WHERE scene=4 ORDER BY sale_number LIMIT 5",
                [],(err,data)=>{
                    if(!err){
                        resolve(data);
                    }
                    else{
                        reject(err);
                    }
                })
        });
    },
    //==========================餐厅主图
    getIndex5(){
        return new Promise((resolve,reject)=>{
            dbpool.connect(" SELECT * FROM yd_goods  WHERE scene=5 ORDER BY sale_number LIMIT 4",
                [],(err,data)=>{
                    if(!err){
                        resolve(data);
                    }
                    else{
                        reject(err);
                    }
                })
        });
    },
    //==========================智能配件
    getIndex6(){
        return new Promise((resolve,reject)=>{
            dbpool.connect("SELECT * FROM yd_goods  WHERE scene=6 ORDER BY sale_number LIMIT 5",
                [],(err,data)=>{
                    if(!err){
                        resolve(data);
                    }
                    else{
                        reject(err);
                    }
                })
        });
    },
    //---------------------------------------------------------支付页面pay
    getAddress(user_id){
        return new Promise((resolve,reject)=>{
            dbpool.connect('SELECT * FROM yd_user_address WHERE user_id= ?',
                [user_id],(err,data)=> {
                    if (!err) {
                        resolve(data);
                    }
                    else {
                        reject(err);
                    }
                })
        })
    },


    //---------------------------------------调数据，新主页，经典案例，向左向右箭头，智能配件，智能功能
    showFourDiv(num){
        return new Promise((resolve,reject)=>{
            dbpool.connect("SELECT * FROM yd_goods where type='灯具'  LIMIT ?,4",
                [num],(err,data)=> {
                    if (!err) {
                        resolve(data);
                    }
                    else {
                        reject(err);
                    }

                })

        })},
    zhinengpeijian(){
        return new Promise((resolve,reject)=>{
            dbpool.connect("SELECT * FROM yd_goods WHERE TYPE='配件' ORDER BY goods_id LIMIT 3",
                [],(err,data)=> {
                    if (!err) {
                        resolve(data);
                    }
                    else {
                        reject(err);
                    }
                })
        })
    },
    gongG(){
        return new Promise((resolve,reject)=>{
            dbpool.connect('SELECT act_name,info FROM yd_action',
                [],(err,data)=> {
                    if (!err) {
                        resolve(data);
                    }
                    else {
                        reject(err);
                    }
                })
        })
    },
    getAddress(user_id){
        return new Promise((resolve,reject)=>{
            dbpool.connect('SELECT * FROM yd_user_address WHERE user_id= ?',
                [user_id],(err,data)=> {
                    if (!err) {
                        resolve(data);
                    }
                    else {
                        reject(err);
                    }
                })
        })
    },
    getAllGoods(num){
        return new Promise((resolve,reject)=>{
            dbpool.connect("SELECT * FROM yd_goods where type ='灯具'  LIMIT ?,6",
                [num],(err,data)=> {
                    if (!err) {
                        resolve(data);
                    }
                    else {
                        reject(err);
                    }
                })
        })
    }





};
module.exports=EditProfileDao;