var fs = require('fs');
var util = require('util');
var read = util.promisify(fs.readFile);

new Promise((resolve, reject) => {                     // promise
    read('./text1.txt')                                // promisify
        .then(data => resolve(data.toString()))
        .catch(err => reject(err));
})
    .then(res => {
        console.log(res);    //1
        return "Jack";
    })
    .then(res => {
        console.log(res);    //2
        return "Ma";
    })
    .then(res => {
        console.log(res);    //3
        return "How are you doing?";
    })
    .then(res => {
        console.log(res);    //4
    })
    .catch(err => {
        console.log(err);
    });

fs.unlink('text2.txt', err => {
    if (err) {
        console.log("Error occured" + err.message);
    }
})