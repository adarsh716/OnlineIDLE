const express=require("express");
const router=express.Router();

const {runcppCode}=require("../controllers/cppController");
router.post("runCppCode",runcppCode);

module.exports=router