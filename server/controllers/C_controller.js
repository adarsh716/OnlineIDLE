const fs = require("fs");
const { v4: uuidv4 } = require('uuid');
const { exec } = require("child_process");

exports.c_language = async (req, res) => {
    try {
        let jobID = uuidv4();
        
        const { language, code, inputValue } = req.body;

        if (!code) {
            return res.status(403).json({
                success: false,
                message: "failed ",
            })
        }
        console.log("Code is ", code);
        const fileName = `${jobID}` + `.C`;
        fs.writeFile(`${fileName}`, code, (err) => {
            if (err) throw err;
        });

        exec(`gcc ./${fileName} -o ./${fileName.replace(".C", "")}`,{inputValue}, (error, stdout, stderr) => {
            
            if (error) {
                console.error(`exec error: ${error}`);
                return res.sendStatus(500);
            }

            exec(`${fileName.replace(".C",".exe")}`,{inputValue}, (error, stderr, stdout) => {
                
                if (error) {
                    console.error(`exec error: ${error}`);
                    return res.status(500).json({ error: 'Failed to execute C code' });
                }

                console.log(`stdout: ${stdout}`);
                console.error(`stderr: ${stderr}`);

                if (fs.existsSync(`./${fileName}`)) {
                    fs.unlinkSync(`./${fileName}`);
                }

                if (fs.existsSync(`./${fileName.replace(".C", ".exe")}`)) {
                    fs.unlinkSync(`./${fileName.replace(".C", ".exe")}`);
                }

                res.sendStatus(200);
            })
        })

    } catch (err) {
        return res.status(503).json({
            success: false,
            message: err.message
        })
    }
}