/**
 * Created by DELL on 2017/11/16.
 */
    const goodsPartsDao=require("../dao/goodsPartsDao.js");
const goodsPartsController={
    getAllParts(request,response){
        goodsPartsDao.getPart().then(data=>{
            console.log(data);
            response.send(data);
        }).catch(err=>{
            console.log(err.message)
        })

        ;
    }
}
module .exports=goodsPartsController;