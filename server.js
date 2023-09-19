// server.js
const express = require('express');
const http=require('http')
const socketIo = require('socket.io');
const app = express();
const  server = http.createServer(app);
const io = socketIo(server);

server.listen(3000)
console.log("Server is running on port:3000" )

app.use(express.static(__dirname+ '/public'));
app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/index.html');
})
//socket
io.on('connection',(socket)=>{
    console.log('connected...')
    socket.on('message',(msg)=>{
        socket.broadcast.emit('message',msg)
    })
})