/**
 * Created by Administrator on 2017/12/16.
 */
const dbpool=require("../config/dbpoolConfig.js");

const jpShowModel={

    login(parms){
        console.log(parms)
        return new Promise((resolve,reject)=>{
            let sql="SELECT * FROM yd_user WHERE phone=? AND PASSWORD=?"
            dbpool.connect(sql,parms,(err,data)=>{
                if(!err){
                    resolve(data);
                }else{
                    reject(err);
                }
            })
        })

    },
    zhuce(parms){
        console.log("注册用户",parms)
        return new Promise((resolve,reject)=>{
            let sql="INSERT INTO yd_user VALUE(NULL,?,'aaa',DEFAULT,NULL,NULL,DEFAULT)"
            dbpool.connect(sql,parms,(err,data)=>{
                if(!err){
                    resolve(data);
                }else{
                    reject(err);
                }
            })
        })
    },
    iscunzai(parms){
        console.log("判断是否存在",parms)

        return new Promise((resolve,reject)=>{
            let sql="SELECT * FROM yd_user WHERE phone=?"
            dbpool.connect(sql,parms,(err,data)=>{
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
