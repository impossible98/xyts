const fs = require("fs");
const path = require("path");

const VERSION_PATH = path.join(__filename, "../../VERSION");
const PKG_PATH = path.join(__filename, "../../package.json");
const pkg = require("../package.json");

function main() {
    fs.readFile(VERSION_PATH, "UTF-8", (err, data) => {
        if (err) {
            throw err;
        }

        pkg.version = data.trim();

        fs.writeFile(PKG_PATH, JSON.stringify(pkg), err => {
            if (err) {
                throw err;
            }
        });
    });
}

main();
