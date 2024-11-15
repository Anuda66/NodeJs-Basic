const yname = "Anuda";
console.log(yname);


//os package-------------------
import os from "os.js"
//os package-------------------
import path1 from 'path.js'
import {fileURLToPath} from 'url.js'
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