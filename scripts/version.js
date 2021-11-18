const fs = require("fs/promises");
const path = require("path");

const VERSION_PATH = path.join(__filename, "../../VERSION");
const PKG_PATH = path.join(__filename, "../../package.json");
const pkg = require("../package.json");

async function writeVersion() {
    const data = await fs.readFile(VERSION_PATH, "UTF-8")
    pkg.version = data.trim();

    await fs.writeFile(PKG_PATH, JSON.stringify(pkg))
}


async function main() {
    await writeVersion();
}

main();