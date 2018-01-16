const dbpool=require("../config/dbpoolConfig");
const diyDao={
    getAllFunctions(){
        return new Promise((resolve,reject)=>{
            let getfunSql="SELECT act_id,act_name FROM yd_action";
            dbpool.connect(getfunSql,[],(err,data)=>{
                if(!err){
                    console.log(data);
                    resolve(data);
                }
                else{
                    reject(err);
                }
            })
        })
    },
    getAllScene(){
        return new Promise((resolve,reject)=>{
            let getSceneSql="SELECT name,scene_id FROM yd_scene";
            dbpool.connect(getSceneSql,[],(err,data)=>{
                if(!err){
                    console.log(data)
                    resolve(data);
                }
                else{
                    reject(err);
                }
            })
        })
    },
    addCustomMade(params){
        return new Promise((resolve,reject)=>{
            let addSql="INSERT INTO yd_custom_made VALUES(?,?,?,?,?,?,?,?,?,?,?)";
            dbpool.connect(addSql,params,(err,data)=>{
                if(!err){
                    console.log("addmaddao:",data);
                    resolve(data);
                }
                else{
                    reject(err);
                }
            })

        })
    },
    getAllCustomGoods(){
        return new Promise((resolve,reject)=>{
            // let customGoodsSql=" SELECT custom_goods_id,all_act,custom_goods_path,NAME FROM yd_custom_goods,yd_scene WHERE yd_custom_goods.scene_id=yd_scene.scene_id"
           let customGoodsSql="SELECT NAME,goods_img FROM yd_goods  WHERE TYPE='灯具' LIMIT 4";
            dbpool.connect(customGoodsSql,[],(err,data)=>{
                if(!err){
                    console.log("dao",data);
                    resolve(data);
                }
                else{
                    reject(err);
                }
            })
        })

    }
}
module.exports=diyDao;