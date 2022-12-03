require('dotenv').config();
const express = require('express');
const app = express();
const morgan = require('morgan');
const connect = require('./Config/ConnectDB');
const router = require('./Router');
const SocketServer = require('./socketsever');

app.use(morgan('dev'));
app.use(express.json());

router(app);

connect();

const http = require('http').createServer(app);
const io = require('socket.io')(http);

io.on('connection', (socket) => {
	// SocketServer(socket);
	SocketServer(socket);
});

http.listen(5000, () => {
	console.log('Server is running on port', 5000);
});
