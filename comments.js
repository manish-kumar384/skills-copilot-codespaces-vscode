// Create web server and run the following requests:
const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    const file = path.join(__dirname, 'comments.js');
    fs.readFile(file, (err, content) => {
        if (err) {
            res.writeHead(500);
            res.end(err.message);
        } else {
            res.writeHead(200, {
                'Content-Type': 'application/javascript'
            });
            res.end(content);
        }
    });
});

server.listen(8888, () => {
    console.log('Server started on http://localhost:8888');
});