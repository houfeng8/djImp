const dbpool=require("../config/dbpoolConfig.js");

const infoDao={
//====================infoAddress=====================

    //初加载就显示数据在页面上
    getadr(params){
        return new Promise((resolve,reject)=>{
            dbpool.connect("SELECT add_id,consi_name,consi_phone,state,city,district,address FROM yd_user_address  WHERE user_id=?",params,(err,data)=>{
                if(!err){
                    resolve(data);
                }else{
                    reject(err)
                }
            })
        })
    },
    //新增数据
    getAdd(params){
        return new Promise((resolve,reject)=>{
            dbpool.connect("INSERT INTO yd_user_address VALUES (null,?,?,?,?,?,?,?,DEFAULT)",params,(err,data)=>{
                if(!err){
                    resolve(data);
                }else{
                    console.log(err)
                }

            })
        })
    },
    //删除数据
    delAdd(params){
        return new Promise((resolve,reject)=>{
            dbpool.connect("DELETE FROM yd_user_address WHERE add_id=?",params,(err,data)=>{
                if(!err){
                    resolve(data);
                }else {
                    console.log(err)
                }
            })
        })
    },



    //====================我的资料
    getper(params){
        console.log("jindao");
        return new Promise((resolve,reject)=>{
            dbpool.connect("SELECT phone,u_name,head_img FROM yd_user WHERE user_id=?",params,(err,data)=>{
                if(!err){
                    resolve(data)
                }else{
                    console.log(err);
                }
            })
        })
    },

    //==========服务记录=====
    getAllService(params){
        console.log("indao");
        return new Promise((resolve,reject)=>{
            let gethelpSql="SELECT service_id,yd_service.user_id,yd_service.goods_id,service_time,yd_service.STATUS,NAME,order_id FROM yd_service,yd_goods,yd_order WHERE yd_service.goods_id=yd_goods.goods_id AND yd_order.user_id=yd_service.user_id AND yd_service.user_id=?"
            dbpool.connect(gethelpSql,params,(err,data)=>{
                if(!err){
                    // console.log(data);
                    resolve(data);
                }
                else{
                    reject(err);
                }
            })
        })
    }
};

module.exports=infoDao;