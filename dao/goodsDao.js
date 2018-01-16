/**
 * Created by Administrator on 2017/12/16.
 */
/**
 * Created by Administrator on 2017/12/16.
 */
const dbpool=require("../config/dbpoolConfig.js");

const jpShowModel={

    getAllgoods(){
        return new Promise((resolve,reject)=>{
            let sql="SELECT a.goods_id AS goodId,a.name AS goodName,a.info AS info,a.price AS price,a.scene AS scene,a.type AS goodstype,a.goods_par AS canshu,a.goods_hot_img AS imgsrc,a.goods_sort AS leixing FROM yd_goods AS a ORDER BY goodId DESC"
            dbpool.connect(sql,[],(err,data)=>{
                if(!err){
                    resolve(data);
                }else{
                    reject(err);
                }
            })
        })
    },
    getScene(){
        return new Promise((resolve,reject)=>{
            let sql="SELECT scene_id,NAME FROM yd_scene";
            dbpool.connect(sql,[],(err,data)=>{
                if(!err){
                    resolve(data);
                }else{
                    reject(err);
                }
            })
        })
    },
    getleixing(){
        return new Promise((resolve,reject)=>{
            let sql="SELECT * FROM yd_assortment";
            dbpool.connect(sql,[],(err,data)=>{
                if(!err){
                    resolve(data);
                }else{
                    reject(err);
                }
            })
        })
    },
    getAllActions(){
        return new Promise((resolve,reject)=>{
            let sql="SELECT act_id,act_name FROM yd_action";
            dbpool.connect(sql,[],(err,data)=>{
                if(!err){
                    resolve(data);
                }else{
                    reject(err);
                }
            })
        })
    }
}
module.exports=jpShowModel;
