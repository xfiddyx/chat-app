const express = require('express');
const cors = require('cors');
const app = express();
const http = require('http').createServer(app);
const socketio = require('socket.io');
const io = socketio(http);

require('./sockets/socket')(io);

app.use(cors());

module.exports = { http, app };
