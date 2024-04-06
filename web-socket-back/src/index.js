const express = require('express');
const { createServer } = require('node:http');
const { join } = require('node:path');
const { Server } = require('socket.io');
const cors = require('cors');

const app = express();
const server = createServer(app);
const SERVER_PORT = "8080";

const corsOptions = {
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
  };
const io = new Server(server, {
    cors: corsOptions
  });

  
app.use(cors(corsOptions));
app.get('/', (req, res) => {
    res.sendFile(join(__dirname, 'index.html'));
});

io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('disconnect', () => {
      console.log('user disconnected');
    });
    socket.on('chat message', (sender, msg) => {
      io.emit('chat message',sender, msg);
    });
  });

server.listen(SERVER_PORT, () => {
    console.log(`server running at http://localhost:${SERVER_PORT}`);
});