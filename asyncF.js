var fs = require('fs');
var util = require('util');

var read = util.promisify(fs.readFile);

async function compute(){
    try {
        const data = await read('./text1.txt')
        console.log(data.toString());

    } catch {
        console.log(new Error("Something happend"));
    }
}

compute();
