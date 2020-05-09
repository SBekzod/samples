const http = require('http');

const server = http.createServer((req, res)=> {
    res.end('Server shows this information');
});

server.listen(3000, 'localhost', () => {
    console.log('Server is running on port 3000');
});