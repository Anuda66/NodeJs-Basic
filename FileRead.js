// Read text file---------------------------------

import {dirname, join} from 'node:path'; //get detectri path 
import {fileURLToPath} from 'node:url'; 
import { readFile } from 'node:fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename)

readFile (join(__dirname, "text.txt"),"utf-8",(err,data)=>{
    // utf-8 used for convert to string-----------------------
    if(err){
        console.log(err)
    }
    console.log(data);
})