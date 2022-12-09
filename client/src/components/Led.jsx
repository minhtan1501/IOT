import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getLed, toggleLed } from '../redux/slice/ledSlice';

export default function Led() {
	const { value } = useSelector((state) => state.led);
	const { value: utsValue } = useSelector((state) => state.uts);
	const { value: ldrValue } = useSelector((state) => state.ldr);
	const { info: socket } = useSelector((state) => state.socket);
	const dispatch = useDispatch();

	useEffect(() => {
		(async () => {
			try {
				await dispatch(getLed()).unwrap();
			} catch (error) {}
		})();
	}, []);

	const handleToggleLed = async () => {
		try {
			await dispatch(toggleLed());
			socket.emit('ledServer', !value);
		} catch (error) {}
	};

	// useEffect(() => {
	// 	if (!value && utsValue && ldrValue < 100) {
	// 		dispatch(toggleLed());
	// 	}
	// }, [utsValue, ldrValue]);

	return (
		<div className="hover:cursor-pointer flex items-center justify-center py-3">
			<img
				onClick={handleToggleLed}
				width="150"
				height="150"
				src={
					value
						? 'https://i.imgur.com/pPqLQx4.png'
						: 'https://i.imgur.com/yRMydZv.png'
				}
				alt=""
			/>
		</div>
	);
}
