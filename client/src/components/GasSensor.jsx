import axios from 'axios';
import React, { useEffect } from 'react';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { getGas } from '../redux/slice/gasSlice';

export default function GasSensor() {
	const { value } = useSelector((state) => state.gas);
	const dispatch = useDispatch();

	useEffect(() => {
		(async () => {
			try {
				const data = await dispatch(getGas()).unwrap();
			} catch (error) {}
		})();
	}, []);

	useEffect(() => {
		(async () => {
			try {
				if (value > 800) {
					console.log(value);

					await axios.get('/api/gas/sendmail');
					toast.custom((t) => (
						<div
							className={`${
								t.visible ? 'animate-enter' : 'animate-leave'
							} max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
						>
							<div className="flex-1 w-0 p-4">
								<div className="flex items-start">
									<div className="flex-shrink-0 pt-0.5">
										<img
											className="h-10 w-10 rounded-full"
											src="gas.png"
											alt=""
										/>
									</div>
									<div className="ml-3 flex-1">
										<p className="text-sm font-medium text-yellow-500">
											Cảnh báo
										</p>
										<p className="mt-1 text-sm text-black font-semibold">
											Phát hiện gò rỉ gas
										</p>
									</div>
								</div>
							</div>
							<div className="flex border-l border-gray-200">
								<button
									onClick={() => toast.dismiss(t.id)}
									className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
								>
									Close
								</button>
							</div>
						</div>
					));
				}
			} catch (error) {}
		})();
	}, [value]);

	return (
		<div className="bg-gradient-to-b from-pink-200 to-pink-100 border-b-4 border-pink-500 rounded-lg shadow-xl p-5">
			<div className="flex flex-row items-center">
				<div className="flex-shrink pr-4">
					<div className="rounded-full p-5">
						<img src="gas.png" className="w-[30px] h-[30px]" />
					</div>
				</div>
				<div className="flex-1 text-right md:text-center">
					<h2 className="font-bold uppercase text-gray-600">
						Cảm biến gas
					</h2>
					<p className="font-bold text-2xl">
						{value < 800 ? 'Bình thường' : 'Phát hiện gò rỉ gas'}
						<span className="text-pink-500">
							<i className="fas fa-exchange-alt"></i>
						</span>
					</p>
				</div>
			</div>
		</div>
	);
}
