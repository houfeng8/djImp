/**
 * Created by Administrator on 2017/11/15.
 */
const  express=require("express");

const  ruter=express.Router();

const EditProfileController=require("../controller/EditProfileController");
const goodsPart=require("../controller/goodsPartsController.js");

const diyController=require("../controller/diyController");

const jingpinController=require("../controller/jingpinController");
const buyController=require("../controller/buyController");
const balanceController=require("../controller/balanceController");
const getInfoController=require("../controller/getinfoController");
const infoController=require("../controller/infoController");




//====================新作的======================
const loginController=require("../controller/loginController");
const smsController=require("../controller/smsController");
const goodsController=require("../controller/goodsController")

//==============新个人中心=================
ruter.get('/getMeOrder.do',getInfoController.getMeOrders);//获取我的订单
ruter.get('/getOrderGoods.do',getInfoController.getOrderGoodslist);//获取订单商品清单


//============================================================个人中心=================
//====================================修改资料===================
ruter.post("/EditProfile.do",EditProfileController.getProfile);
//====================================我的订单==================
ruter.post("/MyOrder.do",EditProfileController.getMyOrder);
//====================================我的地址==================
ruter.post("/UserAddress.do",EditProfileController.UserAddress);
//====================================高级定制==================
ruter.post("/HeightCustomMade.do",EditProfileController.HeightCustomMade);
//==================我的资料===================
ruter.get('/personal.do',infoController.getAllperson);

//============================================================主页=================
ruter.get("/getIndex.do",EditProfileController.getIndex);



//============================================新主页，经典案例，向左向右箭头，智能配件，智能功能

/*=====================调数据======================*/
ruter.post("/showFourDiv.do",EditProfileController.showFourDiv);
ruter.post("/addNum.do",EditProfileController.showFourDiv);
ruter.post("/jianNum.do",EditProfileController.showFourDiv);
ruter.post("/threeDiv.do",EditProfileController.zhinengpeijian);
ruter.post("/threeDiv2.do",EditProfileController.gongG);
ruter.post("/getAddress.do",EditProfileController.getAddress);
//------------------------------------------------------------------------成品展示
ruter.post("/getAllGoods.do",EditProfileController.getAllGoods);
ruter.post("/getAllGoods2.do",EditProfileController.getAllGoods);




//====================无梦============================
/*===========================高级定制主页======================*/

ruter.get("/heightDiy.do",diyController.getAllCustomGoods);
ruter.get("/startDiyfunc.do",diyController.getAllFunctions);
ruter.get("/startDiyscene.do",diyController.getAllScene);
ruter.post("/customMade.do",diyController.addCustomMade);





//==================智能配件=============================
ruter.get("/goodsParts.do",goodsPart.getAllParts);


/*===============================精品展示=======================================*/
ruter.get("/jingpinShow.do",jingpinController.jingpinShow);
/*===========================购买页面============================================*/
ruter.post("/buyPage.do",buyController.buyPage);
/*===============================结算页面========================================*/
ruter.post("/balance.do",balanceController.balance);



/*================================登录==============loginController.login============================*/
ruter.post("/login.do",loginController.login);


//短信验证
ruter.post("/sendCode.do",smsController.sencode);
//短信验证
ruter.post("/yanzheng.do",smsController.yanzheng);

//获取所有商品
ruter.get("/getAllgoods.do",goodsController.getAllgoods)

//获取所有场景
ruter.get("/getScene.do",goodsController.getScene)

ruter.get("/getleixing.do",goodsController.getleixing)

//-------------pay---------------------------------------
ruter.post("/getAddress.do",EditProfileController.getAddress);

ruter.get("/getAllActions.do",goodsController.getAllActions)

ruter.get('/myadress.do',infoController.getAlladdress);
ruter.post('/sendaddress.do',infoController.getAddress);
ruter.get("/deladdress.do",infoController.delAddress);
//=============服务记录=========
ruter.get("/getService.do",infoController.getAllService);

module.exports=ruter;