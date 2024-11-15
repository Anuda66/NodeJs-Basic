// Get out put on consol ----------------------
const yname = "Anuda";
console.log(yname);

//Import package-------------------

import os from "node:os"
import path1 from 'node:path'
import {fileURLToPath} from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path1.dirname(__filename)

console.log(os.platform());
console.log(os.version());

console.log(path1.basename(__dirname));
console.log(path1.basename(__filename));

//Get directroty path----------
console.log(__dirname);

//Get directroty path with file name----------
console.log(__filename);