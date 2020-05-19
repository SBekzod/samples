var fs = require('fs');

fs.readFile('text.txt', (err, data) => {
    if (err) {
        console.log(err.message);
    }
    else {
        console.log(data.toString());
    }
});

console.log('We are here!');
