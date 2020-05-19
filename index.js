var fs = require('fs');

var event = require('events');
const myEmitter = new event.EventEmitter();

fs.readFile('text.txt', (err, data) => {
    myEmitter.emit('readFile', 'Testings');                          // trigger
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

myEmitter.on('readFile', (string) => {                                // bind and handle
    console.log('Event occured!', string);
})
console.log('Sure, We are here!');




