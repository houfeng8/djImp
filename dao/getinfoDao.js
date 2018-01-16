const dbpool=require("../config/dbpoolConfig.js");

const  getinfoDao={
    getAction(){
        return new Promise((resolve,reject)=> {
            let seeString="SELECT * FROM yd_action";
            dbpool.connect(seeString,[],(err,data)=>{
                if(!err){
                    resolve(data);
                }else {
                    reject(err);
                }
            })
        })
    },//获取所有功能
    getScene(){
        return new Promise((resolve,reject)=>{
            let seeString="SELECT\t* FROM yd_scene";
            dbpool.connect(seeString,[],(err,data)=>{
                if(!err){
                    resolve(data);
                }else {
                    reject(err);
                }
            })
        })
    },//获取所有场景
    getAssortment(){
        return new Promise((resolve,reject)=>{
            let seeString="SELECT * FROM yd_assortment";
            dbpool.connect(seeString,[],(err,data)=>{
                if(!err){
                    resolve(data);
                }else {
                    reject(err);
                }
            })
        })
    },//获取所有商品类型
    getGoods(){
        return new Promise((resolve,reject)=>{
            let seeString="SELECT * FROM yd_goods";
            dbpool.connect(seeString,[],(err,data)=>{
                if(!err){
                    resolve(data);
                }else {
                    reject(err);
                }
            })
        })
    },//获取所有商品
    getCheckUser(params){
        return new Promise((resolve,reject)=>{
            let seeString='SELECT * FROM yd_user WHERE  phone="?" AND password="?"';
            dbpool.connect(seeString,params,(err,data)=>{
                if(!err){
                    resolve(data);
                }else {
                    reject(err);
                }
            })
        })
    },//登录查询
    getMeOrder(params){
        return new Promise((resolve,reject)=>{
            let seeString='SELECT order_id,u_name,ors.phone,delivery_time,is_pay,is_send,is_order,money FROM yd_order AS ors JOIN yd_user AS u ON ors.user_id=u.user_id WHERE ors.user_id=?';
            dbpool.connect(seeString,params,(err,data)=>{
                if(!err){
                   resolve(data);
                }else {
                    reject(err);
                }
            })
        })
    },//获取该用户所有订单数据
    getOrderGoods(params){
        return new Promise((resolve,reject)=>{
            let seeString='SELECT orl.goods_id,order_id,number,NAME FROM yd_order_list AS orl JOIN yd_goods AS g ON orl.goods_id=g.goods_id WHERE order_id=?';
            dbpool.connect(seeString,params,(err,data)=>{
                if(!err){
                    resolve(data);
                }else {
                    reject(err);
                }
            })
        })
    },//获取单个订单下商品数据
    getMeOrderIsOk(params){
        return new Promise((resolve,reject)=>{
            let seeString='SELECT * FROM yd_order WHERE user_id =? AND is_order=?';
            dbpool.connect(seeString,params,(err,data)=>{
                if(!err){
                    resolve(data);
                }else {
                    reject(err);
                }
            })
        })
    },//获取该用户所有已完成的订单
};

module.exports=getinfoDao;