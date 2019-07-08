const http = require('http');

http.createServer((request, response) => {
    response.writeHead(200, { 'content-type': 'application/json' });
    const msg = { nombre: 'gwfernandez', edad: 41, url: request.url }
    response.write(JSON.stringify(msg));
    response.end();
}).listen('8080');

console.log('Webserver started on port 8080 ...');
