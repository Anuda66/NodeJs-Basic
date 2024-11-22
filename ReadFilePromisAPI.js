import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { readFile } from "node:fs/promises"; // read file get from promises
import { log } from "node:console";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Promise API -------------------------------------

readFile(join(__dirname, "text.txt"), {
  encoding: "utf-8",
})
  .then((data) => log(data))
  .catch((err) => log(err));
