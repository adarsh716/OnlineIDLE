const fs = require("fs");
const { v4: uuidv4 } = require('uuid');
const { exec } = require("child_process");
const userSchemma=require("../condig/UserSchemma");


exports.py_execution = async (req, res) => {
    try {
        let jobID = uuidv4();

        const { language, code, inputValue } = req.body;
        console.log("Type is ",typeof(code));
        if (!code) {
            return res.status(403).json({
                success: false,
                message: "Failed: Code is required.",
            });
        }

        console.log("Code is ", code);

        const fileName = `${jobID}.py`;

        fs.writeFile(fileName, code, (err) => {
            if (err) throw err;

            if(inputValue){
                fs.writeFile('input.txt', inputValue, (inputErr) => {
                    if (inputErr) throw inputErr;
                });
            }
            exec(`python ./${fileName} `, (error, stdout, stderr) => {
                if (error) {
                    console.log(error);
                    res.send(stderr);
                } else {
                    res.send(stdout);
                }

                if (fs.existsSync(`./${fileName}`)) {
                    fs.unlinkSync(`./${fileName}`);
                }

                if (fs.existsSync(`./input.txt`)) {
                    fs.unlinkSync('./input.txt');
                }
            });
        });
    } catch (err) {
        return res.status(503).json({
            success: false,
            message: err.message,
        });
    }
};

exports.saveCode=async(req,res)=>{
    try{
        console.log(req.body);
        const {code,language,email}=req.body;
        const response=await userSchemma.create({
            email:email,
            codeExecuted:{
                language:language,
                code:code   
            }
        })
        console.log("Saved Code",response);
        return res.status(200).json({
            success:true,
            message:"Code Saved !"
        })
    }catch(err){
        return res.status(503).json({
            success: false,
            message: err.message,
        });
    }
}