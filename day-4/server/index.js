// import all needed package
const express = require('express');
const path = require('path');

const http = require('node:http');

// init express server and router
const app = express();
const mainRouter = require('./router');


app.use(express.json());
app.use(express.urlencoded({ extended: false }));


// http router
app.use('/', mainRouter);

// static router
app.use('/static', express.static(path.join(__dirname, 'public')));

const server = http.createServer(app);

server.listen(3000, 'localhost', function(){
    console.log('Listening on localhost:3000');
});