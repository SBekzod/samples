var fs = require('fs');

var event = require('events');
const myEmitter = new event.EventEmitter();

fs.readFile('text.txt', (err, data) => {                           // callback function readFie
    myEmitter.emit('readFile');
    if (err) {
        console.log('There is an Error', err);
    }
    else {
        setTimeout(() => {
            console.log('Let us wait 2 seconds');
            console.log(data.toString());
        }, 5000);
    }
});

myEmitter.on('readFile', () => {
    console.log('Event occured!');
})
console.log('We are here!');




