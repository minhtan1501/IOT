let users = [];
const SocketServer = (socket) => {
	socket.on('joinUser', (id) => {
		users.push(id);
	});
	socket.on('disconnect', () => {
		users = users.filter((user) => user !== socket.id);
	});
};

module.exports = SocketServer;
