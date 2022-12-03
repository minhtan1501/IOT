import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

export default function SocketClient() {
	const { info: socket } = useSelector((state) => state.socket);
	console.log(socket);
	useEffect(() => {
		Object.keys(socket).length && socket.emit('joinUser', socket.id);
	}, [socket]);

	return <div></div>;
}
