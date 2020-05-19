var fs = require('fs');

console.log('We are here!');

new Promise((resolve, reject) => {
    fs.readFile('./text1.txt', (err, data) => {
        if (err) {
            reject(err)
        } else {
            resolve(data.toString());
        }
    });
})
    .then(res => {
        console.log(res);
        return "Jack";
    })
    .then(res => {
        console.log(res);
        return "Ma";
    })
    .then(res => {
        console.log(res);
        return "How are you doing?";
    })
    .then(res => {
        console.log(res);
        return null;
    })
    .catch(err => {
        console.log(err);
    });