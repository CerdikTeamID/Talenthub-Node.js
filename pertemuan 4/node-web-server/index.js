// server.mjs
const { createServer } = require('node:http')

const server = createServer(function(req, res){
    res.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    res.end('Hello World!\n');
});

// starts a simple http server locally on port 3000
server.listen(3000, 'localhost', function(){
    console.log('Listening on localhost:3000');
});

// run with `node server.mjs`