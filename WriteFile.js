import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { appendFile, readFile, writeFile } from "node:fs"; // read file get from call back
import { log } from "node:console";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

//Call back API-------------------------------------

appendFile(
  join(__dirname, "Write.txt"),
  `Anuda Ransara.  Sabaragamuwa University of Sri Lanka`,
  {
    encoding: "utf8",
  },
  (err, data) => {
    if (err) {
      log(err);
    }
  }
);
