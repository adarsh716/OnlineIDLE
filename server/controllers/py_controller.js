const fs = require("fs");
const { v4: uuidv4 } = require('uuid');
const { exec } = require("child_process");

exports.py_execution = async (req, res) => {
    try {
        let jobID = uuidv4();

        const { language, code, inputValue } = req.body;

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

            fs.writeFile('input.txt', inputValue, (inputErr) => {
                if (inputErr) throw inputErr;

                exec(`python ./${fileName} < ./input.txt`, (error, stdout, stderr) => {
                    if (error) {
                        res.status(500).send(stderr);
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
        });
    } catch (err) {
        return res.status(503).json({
            success: false,
            message: err.message,
        });
    }
};
