const diyDao=require("../dao/diyDao");
const diyController={
    getAllFunctions(request,response){
        diyDao.getAllFunctions().then(data=>{
            response.send(data);
        }).catch((err)=>{
            response.send(err);
        })
    },
    getAllScene(request,response){
        diyDao.getAllScene().then((data)=>{
            console.log("controller:",data);
            response.send(data);
        }).catch((err)=>{
            response.send(err);
        })
    },
//    新增用户定制订单
    addCustomMade(request,response){
        //userid,coustomName,coustomTel,customEmail,address,customOtherdes,tPrice,secenArr,orderfunction,controlways
        console.log("提交订单controller：",request.body);
        let userid=request.body.userid;
        // let coustomName=request.body.coustomName;
        let coustomTel=request.body.coustomTel;
        let customEmail=request.body.customEmail;
        let address=request.body.address;
        let customOtherdes=request.body.customOtherdes;
        // let tPrice=request.body.tPrice;
        let secenArr=request.body.secenArr;
        let orderfunction=request.body.orderfunction;
        // let controlways=request.body.controlways;
        params=[null,userid,coustomTel,customEmail,address,customOtherdes,secenArr,orderfunction,null,null,null];
        diyDao.addCustomMade(params).then((data)=>{
            console.log(data);
        })
    },
//    获取高端定制的定制成品数据
    getAllCustomGoods(request,response){
        diyDao.getAllCustomGoods().then((data)=>{
            console.log("controller",data);
            response.send(data);
        }).catch((err)=>{
            response.send(err);
        })
    }
}
module.exports=diyController
