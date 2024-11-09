const input = require("fs").readFileSync("input.txt", "utf8");
const lines = input.split("\n");

// Example: reading two numbers from input
const a = parseInt(lines[0]);
const b = parseInt(lines[1]);

console.log(a + b);
