/**
 * Created by Administrator on 2017/12/16.
 */
/*购买页面*/

const goodsDao= require("../dao/goodsDao");
const goodsController={
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
    },
    getAllgoods(req,resp){
        console.log("进入获取商品")
        goodsDao.getAllgoods().then(data=>{
            resp.send(data);
        })

    },
    getScene(req,resp){
        console.log("进入场景")
        goodsDao.getScene().then(data=>{
            resp.send(data);
        })
    },
    getleixing(req,resp){
        console.log("进入类型")
        goodsDao.getleixing().then(data=>{
            resp.send(data)
        })
    },
    getAllActions(req,resp){
        console.log("进入功能")
        goodsDao.getAllActions().then(data=>{
            resp.send(data)
        })
    }
}

module.exports=goodsController;