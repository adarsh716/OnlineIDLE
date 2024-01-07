const express=require("express");
const router=express.Router();

const {runcppCode}=require("../controllers/cppController");
const {c_language}=require("../controllers/C_controller")
const {py_execution,saveCode}=require("../controllers/py_controller");
const {runJavaCode}=require("../controllers/java_controller")

router.post("/runCppCode",runcppCode);
router.post("/runCcode",c_language);
router.post("/runPyCode",py_execution);
router.post("/saveCode",saveCode);
router.post("/runjavacode",runJavaCode);

module.exports=router
