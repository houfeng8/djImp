const  getinfo=require("../dao/getinfoDao" );

const getinfos={
    getActions(req,resp){
            getinfo.getAction().then(data=>{
                resp.data;
            }).catch(err=>{
                resp.err;
            })
        },//获取所有功能
    getScenes(req,resp){
        getinfo.getScene().then(data=>{
            resp.data;
        }).catch(err=>{
            resp.err;
        })
    },//获取所有场景
    getAssortments(req,resp){
        getinfo.getAssortment().then(data=>{
            resp.data;
        }).catch(err=>{
            resp.err;
        })
    },//获取所有商品类型
    getGoodss(req,resp){
        getinfo.getGoods().then(data=>{
            resp.send(data);
        }).catch(err=>{
            resp.send(err);
        })
    },//获取所有商品
    getCheckUsers(req,resp){
        let phone=req.body.phone,pwd=req.body.pwd;
        getinfo.getCheckUser([phone,pwd]).then(data=>{
            resp.send(data);
        }).catch(err=>{
            resp.send(err);
        })
    },//登录
    getMeOrders(req,resp){
        let oid=req.query.user_id;
        getinfo.getMeOrder([oid]).then(data=>{
            // let goodsLists =data;
            resp.send(data);
        }).catch(err=>{
            resp.send(err);
        });
    },//获取该用户所有订单
    getOrderGoodslist(req,resp){
        getinfo.getOrderGoods([req.query.order_id]).then(data=> {
            resp.send(data);
        }).catch(err=>{
            resp.send(err)
        });
    },//获取订单商品清单


};

module.exports=getinfos;