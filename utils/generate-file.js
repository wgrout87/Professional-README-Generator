const fs = require("fs");

const writeFile = fileContent => {
    if (!fs.existsSync("./dist")) {
        fs.mkdir("./dist", (err) => {
            if (err) throw err;
        });
    };
    return new Promise((resolve, reject) => {
        fs.writeFile("./dist/README.md", fileContent, err => {
            if (err) {
                reject(err);
                return;
            }

            resolve({
                ok: true,
                message: "README created!"
            });
        });
    });
};

module.exports = { writeFile };