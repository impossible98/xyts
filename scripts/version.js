const fs = require("fs/promises");
const path = require("path");

const VERSION_PATH = path.join(__filename, "../../VERSION");
const PKG_PATH = path.join(__filename, "../../package.json");
const pkg = require("../package.json");
const GRREN = "\x1B[32m%s\x1B[0m";

async function writeVersion() {
    const data = await fs.readFile(VERSION_PATH, "UTF-8");
    pkg.version = data.trim();

    const newPkg = JSON.stringify(pkg, null, 4) + "\n";

    await fs.writeFile(PKG_PATH, newPkg);
}

function showVersion() {
    const name = pkg.name;
    const version = pkg.version;

    console.log("\x1B[32m%s\x1B[0m", `${name} version: ${version}`);
}

async function main() {
    await writeVersion();
    showVersion();
}

main();
