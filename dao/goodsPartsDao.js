/**
 * Created by DELL on 2017/11/16.
 */
    const dbpool=require("../config/dbpoolConfig.js");
const goodsPartsDao={
    getPart(){
        return new Promise((resolve,reject)=>{
            let partsSql="SELECT goods_id,NAME as goods_name,info,price,goods_img,goods_hot_img FROM yd_goods WHERE goods_sort";
            dbpool.connect(partsSql,[],(err,data)=>{
                if(!err){
                    resolve(data);
                }
                else{
                    reject(err);
                }
            });
        });
    }
}
module.exports=goodsPartsDao;