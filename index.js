const fs = require('fs');

fs.readFile('text.txt', (err, data) => {                           // callback function readFie
    if (err) {
        console.log('There is an Error', err);
    }
    else {
        setTimeout(()=> {
            console.log('Let us wait 2 seconds');
            console.log(data.toString());
        }, 2000);
    }
});

console.log('We are here!');
console.log(__filename);




