import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import dhtSlice from './redux/slice/dhtSlice';
import gasSlice from './redux/slice/gasSlice';
import ldrSlice from './redux/slice/ldrSlice';
import ledSlice from './redux/slice/ledSlice';
import motorSlice from './redux/slice/motorSlice';
import rainSlice from './redux/slice/rainSlice';
import utsSlice from './redux/slice/utsSlice';

export default function SocketClient() {
	const { info: socket } = useSelector((state) => state.socket);
	const dispatch = useDispatch();
	useEffect(() => {
		Object.keys(socket).length && socket.emit('joinUser', socket.id);
	}, [socket]);

	useEffect(() => {
		Object.keys(socket).length &&
			socket?.on('dhtClient', ({ dht }) => {
				console.log(dht);
				dispatch(dhtSlice.actions.update(dht));
			});
	}, [socket, dispatch]);

	useEffect(() => {
		Object.keys(socket).length &&
			socket?.on('ldrClient', ({ ldr }) => {
				dispatch(ldrSlice.actions.update(ldr.value));
			});
	}, [socket, dispatch]);

	useEffect(() => {
		Object.keys(socket).length &&
			socket?.on('gasClient', ({ gas }) => {
				dispatch(gasSlice.actions.update(gas.value));
			});
	}, [socket, dispatch]);

	useEffect(() => {
		Object.keys(socket).length &&
			socket?.on('utsClient', ({ uts }) => {
				dispatch(utsSlice.actions.update(uts.state));
			});
	}, [socket, dispatch]);

	useEffect(() => {
		Object.keys(socket).length &&
			socket?.on('rainClient', ({ rain }) => {
				dispatch(rainSlice.actions.update(rain.state));
			});
	}, [socket, dispatch]);

	useEffect(() => {
		Object.keys(socket).length &&
			socket?.on('ledClient', ({ led }) => {
				// const data = JSON.parse()
				dispatch(ledSlice.actions.update(led.state));
			});
	}, [socket, dispatch]);

	useEffect(() => {
		Object.keys(socket).length &&
			socket?.on('servoClient', ({ motor }) => {
				dispatch(motorSlice.actions.update(motor.state));
			});
	}, [socket, dispatch]);
	return <></>;
}
