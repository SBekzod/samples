var fs = require('fs');

const data = fs.readFileSync('./text.txt');

console.log("Here is the result: " + data);