/*购买页面*/
const dbpool=require("../config/dbpoolconfig");
const jpShowDao= require("../dao/jpShowDao");
const buyController={
    buyPage(req,resp){
        let goodsname=req.body.goodsname;

      console.log(goodsname)
        jpShowDao.buyGoods(goodsname).then(data=>{
            jpShowDao.actionGoods(goodsname).then(actionlist=>{
                jpShowDao.colorGoods(goodsname).then(colorlist=>{
                    jpShowDao.sizeGoods(goodsname).then(sizelist=>{
                        resp.send({goods:data,actionlist:actionlist,colorlist:colorlist,sizelist:sizelist})
                    }).catch((err)=>{
                        resp.send(err);
                    })
                })
            })

        })
    }
}

module.exports=buyController;