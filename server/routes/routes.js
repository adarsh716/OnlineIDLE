const express=require("express");
const router=express.Router();

const {runcppCode}=require("../controllers/cppController");
const {c_language}=require("../controllers/C_controller")
const {py_execution}=require("../controllers/py_controller");

router.post("/runCppCode",runcppCode);
router.post("/runCcode",c_language);
router.post("/runPyCode",py_execution);

module.exports=router