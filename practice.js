var fs = require('fs');

fs.writeFile('text.txt', 'My name is Bekzod', (err, data) => {
    if(err) {
        console.log('Error');
    }
    else {
        console.log('I have changed');
    }
})