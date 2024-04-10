const express=require("express")
const router=express.Router()
const {addData}=require("./controller")

router.post("/std",addData)

module.exports=router
