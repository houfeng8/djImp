const infoDao=require("../dao/infoDao.js");
const infoController={
//====================infoAddress=====================

    //初加载就显示数据在页面上
    getAlladdress(req,resp){

        let userid=req.query.userid;
        console.log(userid);
        params=[userid];
        infoDao.getadr(params).then((data) => {
            resp.send(data);

        })
    },
    //新增数据
    getAddress(req,resp){
        let name=req.body.consi_name;
        let phone=req.body.consi_phone;
        let address=req.body.address;
        let state=req.body.state;
        let city=req.body.city;
        let district=req.body.district;
        let userid=req.body.userid;
        infoDao.getAdd([userid,name,phone,state,city,district,address]).then(data=>{
            console.log("新增数据成功");
        })
    },
    delAddress(req,resp){
        let addid=req.query.add_id;
        console.log(addid);
        infoDao.delAdd([req.query.add_id]).then(data=>{
            console.log('删除成功');
            resp.send(data);
        })
    },

// ============我的资料=======
    getAllperson(req,resp){
        let userid=req.query.userid;
        console.log("userid",userid);
        params=[userid];
        infoDao.getper(params).then((data) => {
            resp.send(data);
        })
    },


    //========服务记录=========
    getAllService(request,response){
        let userid=request.query.userid;
        params=[userid];
        infoDao.getAllService(params).then((data)=>{
            // console.log("infocontoller:",data);
            response.send(data);
        }).catch((err)=>{
            response.send(err);
        })
    },

};

module.exports=infoController;