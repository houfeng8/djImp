/**
 * Created by Administrator on 2017/11/15.
 */
const EditProfileDao=require("../dao/EditProfileDao");

const EditProfileController={
    getProfile(req,resp){
        let params=[];
        //console.log(req.body.username);
        let user_id=req.body.user_id;
        params.push(user_id);
        EditProfileDao.getProfile(params).then((data)=>{
            resp.send(data);
        }).catch((err)=>{
            console.log(err.message);
            resp.send(err);
        });
    },
    getMyOrder(req,resp){
        let user_id=req.body.user_id;
        EditProfileDao.getMyOrder(user_id).then((data)=>{
            resp.send(data);
        }).catch((err)=>{
            console.log(err.message);
            resp.send(err);
        });
    },
    UserAddress(req,resp){
        let user_id=req.body.user_id;
        EditProfileDao.UserAddress(user_id).then((data)=>{
            resp.send(data);
        }).catch((err)=>{
            console.log(err.message);
            resp.send(err);
        });
    },
    HeightCustomMade(req,resp){
        let user_id=req.body.user_id;
        EditProfileDao.HeightCustomMade(user_id).then((data)=>{
            resp.send(data);
        }).catch((err)=>{
            console.log(err.message);
            resp.send(err);
        });
    },
    getIndex(req,resp){
        let params=[];
        //轮播的3张热图
        EditProfileDao.getIndex1().then(
            (data)=> {
                params.push(data);
                //4个场景图
                EditProfileDao.getIndex2().then(
                    (data)=> {
                        params.push(data);
                        //resp.send(params);
                      //客厅主图
                        EditProfileDao.getIndex3().then(
                            (data)=> {
                                params.push(data);
                                //卧室主图
                                EditProfileDao.getIndex4().then(
                                    (data)=> {
                                        params.push(data);
                                        //餐厅主图
                                        EditProfileDao.getIndex5().then(
                                            (data)=> {
                                                params.push(data);
                                                //智能配件
                                                EditProfileDao.getIndex6().then(
                                                    (data)=> {
                                                        params.push(data);
                                                        resp.send(params);
                                                    }
                                                ).catch((err)=>{
                                                        console.log(err.message);
                                                        resp.send(err);
                                                    });
                                            }
                                        ).catch((err)=>{
                                                console.log(err.message);
                                                resp.send(err);
                                            });
                                    }
                                ).catch((err)=>{
                                        console.log(err.message);
                                        resp.send(err);
                                    });
                            }
                        ).catch((err)=>{
                                console.log(err.message);
                                resp.send(err);
                            });
                    }
                ).catch((err)=>{
                        console.log(err.message);
                        resp.send(err);
                    });
            }
        ).catch((err)=>{
                console.log(err.message);
                resp.send(err);
            });
    },

    //---------------------------------------------新数据，支付页面pay
    getAddress(req,resp){
        let user_id=req.body.userid;
        console.log(user_id);
        EditProfileDao.getAddress(user_id).then(
            (data)=> {
                console.log(data);
                resp.send(data);
            })

    },




//----------------------------调数据，新主页，经典案例，向左向右箭头，智能配件，智能功能
showFourDiv(req,resp){
    let num=req.body.num;
    console.log(num);
    EditProfileDao.showFourDiv(num).then(
        (data)=> {
            resp.send(data);
        });
},
zhinengpeijian(req,resp){
    // console.log("enter");
    EditProfileDao.zhinengpeijian().then(
        (data)=> {
            // console.log(data);
            resp.send(data);
        })
},
gongG(req,resp){
    EditProfileDao.gongG().then(
        (data)=> {
            console.log(data);
            resp.send(data);
        })
},
    getAllGoods(req,resp){
        let num=req.body.num;
        console.log(num);
        EditProfileDao.getAllGoods(num).then(
            (data)=> {
                resp.send(data);
            })
    }


};

module.exports=EditProfileController;