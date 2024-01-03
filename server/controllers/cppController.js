const fs=require("fs");
const { v4: uuidv4 } = require('uuid');
const {exec}=require("child_process");

exports.runcppCode=async(req,res)=>{
    try{
        let jobID = uuidv4();
        const {code,language,input}=req.body;
        
        if(input){
            fs.writeFileSync("input.txt",`${input}`);
        }
        
        if(!language){
            return res.status(403).json({
                success:false
            })
        }

        const fileName=`${jobID}`+`.${language}`;

        fs.writeFile(`${jobID}`+`.${language}`,code,(err)=>{
            if (err) throw err;
        });

        if(language==="cpp"){            
            exec(`g++ ${fileName} -o ${fileName.replace(".cpp",".exe")} && ${fileName.replace(".cpp",".exe")} `, (error, stdout, stderr) => {
                if (error) {
                  console.error(`Error executing C++ code: ${error.message}`);
                  res.status(500).send(stderr);
                } else {
                  console.log(`C++ code executed successfully: ${stdout}`);
                  res.send(stdout);
                }

                if(fs.existsSync(`${fileName}`))
                    fs.unlinkSync(`${fileName}`);
                
                if(fs.existsSync(`${fileName.replace(".cpp",".exe")}`))    
                    fs.unlinkSync(`${fileName.replace(".cpp",".exe")}`);

                if(fs.existsSync("input.txt")){
                    fs.unlinkSync("input.txt");
                }
            });
        }
    }
    catch(err){
        return res.status(503).json({
            success:false,
            message:err.message
        })
    }
}