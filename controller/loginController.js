/**
 * Created by Administrator on 2017/12/16.
 */
/*购买页面*/

const loginDao= require("../dao/loginDao");
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
    },
    login(req,resp){
        let username=req.body.username;
        let pwd=req.body.pwd;
        console.log("进入控制岑",username,pwd)
        loginDao.login([username,pwd]).then(data=>{
            console.log(data);
            resp.send(data);
        })
    }
}

module.exports=buyController;