var http = require('http');
var url = require('url');
var fileSystem = require('fs');

http.createServer(function(request, response) {

    var pathName = url.parse(request.url).pathname;
    var fileName = pathName.substr(1); /* lets remove the "/" from the name */


    if (fileName === 'index') {
        fileName = 'index.html';
    } else if (fileName === 'todo') {
        fileName = 'todo.json';
    } else if (fileName === 'read-todo') {
        fileName = 'read-todo.html';
    } else {
        fileName = 'index.html';
    }

    fileSystem.readFile(fileName, callback);

    function callback(err, data) {
        if (err) {
            console.error(err);
            response.writeHead(400, {
                'Content-Type': 'text/html'
            });
            response.write('<!DOCTYPE html><html><body><div>Page Not Found</div></body></html>');
        } else {

            if (fileName === 'index.html') {
                response.writeHead(200, {
                    'Content-Type': 'text/html'
                });
                response.write(data.toString());
                //todo json file
            }
            if (fileName === 'todo.json') {
                response.writeHead(200, {
                    'Content-Type': 'application/json'
                });
                response.write(data.toString());
            }
            if (fileName === 'read-todo.html') {
                response.writeHead(200, {
                    'Content-Type': 'text/html'
                });
                response.write(data.toString());
            }
            response.end();
        }
    }
}).listen(3000);
console.log('Server running at http://localhost:3000/index.html');