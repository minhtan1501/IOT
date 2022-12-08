import React, { useEffect } from 'react';
import { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMotor, updateMotor } from '../redux/slice/motorSlice';
let timeoutId;

export default function Motor() {
	const { value } = useSelector((state) => state.motor);
	const { value: rainValue } = useSelector((state) => state.rain);
	const [isOpen, setIsOpen] = useState(false);
	const { info: socket } = useSelector((state) => state.socket);
	const ref = useRef();

	const dispatch = useDispatch();

	useEffect(() => {
		(async () => {
			try {
				const value = await dispatch(getMotor()).unwrap();
				setIsOpen(value === true);
			} catch (error) {}
		})();
	}, []);

	useEffect(() => {
		const shouldUpdate = rainValue != null && value !== rainValue;
		console.log({ value, rainValue });
		if (shouldUpdate) {
			(async () => {
				await dispatch(updateMotor(rainValue === true));
				updateAnim();
			})();
		}
	}, [rainValue]);

	const handleOnChange = async (e) => {
		await dispatch(updateMotor(e.target.checked));
		socket.emit('servoServer', e.target.checked);
		updateAnim();
	};

	const updateAnim = () => {
		if (timeoutId) clearTimeout(timeoutId);

		const className = isOpen ? 'animate-spin' : 'animate-reverse-spin';
		setIsOpen(!isOpen);
		ref.current.className = className;

		timeoutId = setTimeout(() => {
			ref.current.className = '';
		}, 3000);
	};

	return (
		<div className="hover:cursor-pointer flex flex-col items-center justify-center py-3">
			<img width="150" height="150" src="gear.png" alt="" ref={ref} />
			<label className="mt-3 inline-flex relative items-center mr-5 cursor-pointer">
				<input
					type="checkbox"
					className="sr-only peer"
					checked={value}
					onChange={handleOnChange}
				/>
				<div className="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-purple-300 dark:peer-focus:ring-purple-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-purple-600"></div>
				<span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
					{!value ? 'Đóng' : 'Mở'} mái che
				</span>
			</label>
		</div>
	);
}
