/*½áËã*/
const dbpool = require("../config/dbpoolconfig");
const jpShowModel = require("../dao/jpShowDao");

const balanceController={
    balance(req,resp){
        let username=req.body.username;
      jpShowModel.balanceGoods(username).then(addressdata=>{
          resp.send(addressdata);
      }).catch((err)=>{
          resp.send(err);
      })
    }
}

module.exports=balanceController;
