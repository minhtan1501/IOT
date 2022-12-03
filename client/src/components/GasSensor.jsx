import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getGas } from '../redux/slice/gasSlice';
import modalSlice from '../redux/slice/modalSlice';

export default function GasSensor() {
	const { value } = useSelector((state) => state.gas);
	const dispatch = useDispatch();

	useEffect(() => {
		(async () => {
			try {
				const data = await dispatch(getGas()).unwrap();
				if (+data > 1000)
					dispatch(
						modalSlice.actions.show({
							message: 'Phát hiện khí gas',
						}),
					);
			} catch (error) {}
		})();
	}, []);

	return (
		<div className="bg-gradient-to-b from-pink-200 to-pink-100 border-b-4 border-pink-500 rounded-lg shadow-xl p-5">
			<div className="flex flex-row items-center">
				<div className="flex-shrink pr-4">
					<div className="rounded-full p-5 bg-pink-600">
						<i className="fas fa-users fa-2x fa-inverse"></i>
					</div>
				</div>
				<div className="flex-1 text-right md:text-center">
					<h2 className="font-bold uppercase text-gray-600">
						Gas Sensor
					</h2>
					<p className="font-bold text-3xl">
						{value}
						<span className="text-pink-500">
							<i className="fas fa-exchange-alt"></i>
						</span>
					</p>
				</div>
			</div>
		</div>
	);
}
