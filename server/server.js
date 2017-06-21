const express = require('express');
const http = require('http');
const path = require('path');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
let app = express();
let server = http.createServer(app);
let io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
    console.log('New user connected');

    socket.emit('newMessage', {
        from: 'Mandukk',
        text: 'Hi, my name is Mandukk!',
        createdAt: new Date().getTime()
    });

    socket.on('createMessage', (message) => {
        console.log('Create message', message);
    })
    socket.on('disconnect', () => {
        console.log('User was disconnected');
    });
});
server.listen(port, () => {
    console.log(`Server is up on port ${port}!`);
});