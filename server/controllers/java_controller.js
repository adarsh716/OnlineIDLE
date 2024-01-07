const fs = require("fs");
const { v4: uuidv4 } = require('uuid');
const { exec } = require("child_process");

exports.runJavaCode = async (req, res) => {
    try {
        console.log("Inside Java");
        let jobID = uuidv4();
        const { code, input } = req.body;

        if (input) {
            fs.writeFileSync("input.txt", `${input}`);
        }

        const fileName = `MyProgram.java`;

        fs.writeFile(fileName, code, (err) => {
            if (err) throw err;
        });
 
        exec(`javac -source 17 -target 17 ${fileName} && java -cp . MyProgram`, (error, stdout, stderr) => {
            if (error) {
                console.error(`Error executing Java code: ${error.message}`);
                console.error(`Java stderr: ${stderr}`);
                res.status(500).send(stderr);
            } else {
                console.log(`Java code executed successfully: ${stdout}`);
                res.send(stdout);
            }

            if (fs.existsSync(`./${fileName}`)) {
                fs.unlinkSync(`./${fileName}`);
            }

            if (fs.existsSync("input.txt")) {
                fs.unlinkSync("input.txt");
            }
        });
    } catch (err) {
        return res.status(503).json({
            success: false,
            message: err.message
        });
    }
};
