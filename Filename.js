import { log } from "node:console";
import { readFile } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

console.log(__filename); // Fil name with path
console.log(__dirname); // File path of the directory containing the current file

readFile(
  join(__dirname, "text.txt"),
  {
    encoding: "utf8",
  },
  (err, data) => {
    if (err) {
      log(err);
    }
    log(data);
  }
);
