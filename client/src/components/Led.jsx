import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getLed } from '../redux/slice/ledSlice';

export default function Led() {
	const { value } = useSelector((state) => state.led);
	const dispatch = useDispatch();

	useEffect(() => {
		(async () => {
			try {
				await dispatch(getLed()).unwrap();
			} catch (error) {}
		})();
	}, []);

	return (
		<div className="flex items-center justify-center py-3">
			<img
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
