const fs = require("fs");

// Blocking, synchronous way
const testInput = fs.readFileSync("./txt/input.txt", "utf-8");
console.log(testInput);

const textOutput = `This is what we know about the avocado: ${testInput}.\nCreated on ${Date.now()}`;
fs.writeFileSync("./txt/output.txt", textOutput);
console.log("File has been written!");

// Non-blocking, asynchronous way
// fs.readFile("./txt/start.txt", "utf-8", (err, data) => {
//   console.log(data);
// });
fs.readFile("./txt/start.txt", "utf-8", (err, data1) => {
  fs.readFile(`./txt/${data1}.txt`, "utf-8", (err, data2) => {
    console.log(data2);
    fs.readFile(`./txt/append.txt`, "utf-8", (err, data3) => {
      console.log(data3);
      fs.writeFile("./txt/final.txt", `${data2}\n${data3}`, "utf-8", (err) => {
        console.log("File has been written!");
      });
    });
  });
});

console.log("Reading file...");
