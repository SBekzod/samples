var fs = require('fs');

var event = require('events');
const myEmitter = new event.EventEmitter();

fs.readFile('text.txt', (err, data) => {                          
    myEmitter.emit('readFile', 'Testing');                          // trigger
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

myEmitter.on('readFile', (data) => {                                // bind and handle
    console.log('Event occured!', data);
})
console.log('We are here!');




