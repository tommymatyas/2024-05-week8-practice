// import * as fs from "node:fs";

const fs = require("node:fs"); // js fileban futtatando, same import, different syntax

/* // Synchronous (Sync) File Reading
try {
  const data = fs.readFileSync("file.json", "utf8");
  console.log(data);
  const jsonData = JSON.parse(data);
  console.log(jsonData);
  //   console.log("szinkron szia");
} catch (err) {
  console.error("Error reading the file:", err);
} */

/* // Asynchronous (Async) File Reading
fs.readFile("file.json", "utf8", (err, data) => {
  if (err) {
    console.error("Error reading the file:", err);
    return;
  }
  console.log("asznkron", data);
});
console.log("aszinkron szia"); // eloszor ezt dobja ki, de kozbe fut a kod */

fs.readFile("file.json", "utf8", (err, data) => {
  if (err) {
    console.error("Error reading the file:", err);
    return;
  }

  console.log(data);

  try {
    const jsonData = JSON.parse(data);
    console.log(jsonData);
  } catch (parseErr) {
    console.err("Error at parsing the data", parseErr);
  }
});
