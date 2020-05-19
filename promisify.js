var fs = require('fs');
var util = require('util');

var read = util.promisify(fs.readFile);

const compute = () => {
    read('./text1.txt')
        .then(data => {
            console.log(data.toString());
        })
        .catch(err => {
            console.log(err.message);
        });
}

compute();
