const express=require("express")
const router= express.Router()
const cryptocontroller=require("../controller/cryptocontroller")



router.get("/crypto",cryptocontroller.getcrypto)




module.exports=router