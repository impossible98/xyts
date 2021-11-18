const fs = require("fs/promises");
const path = require("path");

const prettyJs = require("pretty-js");

const VERSION_PATH = path.join(__filename, "../../VERSION");
const PKG_PATH = path.join(__filename, "../../package.json");
const pkg = require("../package.json");

async function writeVersion() {
    const data = await fs.readFile(VERSION_PATH, "UTF-8");
    pkg.version = data.trim();

    const newPkg = JSON.stringify(pkg, null, 4) + "\n";

    await fs.writeFile(PKG_PATH, newPkg);
}

async function main() {
    await writeVersion();
}

main();
