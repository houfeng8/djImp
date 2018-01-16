/*精品展示*/
const dbpool = require("../config/dbpoolconfig");
const jpShowModel = require("../dao/jpShowDao");
const jingpinController={
    jingpinShow(req,resp){
        jpShowModel.jpShow().then(data=>{
            resp.send(data);
        }).catch((err)=>{
            resp.send(err);
        })
    }
}


module.exports=jingpinController;
