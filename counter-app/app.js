const path = require('path');
const express = require('express');
const http = require('http');
const socketio = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

const PORT = 3000 || process.env.PORT;

//COUNTER APPLICATION
let count=0;

//set static folder
app.use(express.static(path.join(__dirname,'public')));

//Run when client connects
io.on('connection',socket => {
    console.log('New WS Connection...');

    //to use socket functions in socket object
    //emit() - send event
    //on() - listen for an event
    socket.emit('countUpdated',count); // now write code in CLIENT to accept it and do sth.
    socket.on('increment',() =>{
        count++;
        //1. to emit an event to a particular connection
        // socket.emit('countUpdated',count);
        //2. to emit to all connections
        io.emit('countUpdated',count);
    })
});

server.listen(PORT,() => console.log(`Server running on port ${PORT}`));