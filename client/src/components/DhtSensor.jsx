import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDht } from '../redux/slice/dhtSlice';

export default function DhtSensor() {
	const { temp, humi } = useSelector((state) => state.dht);
	const dispath = useDispatch();

	useEffect(() => {
		(async () => {
			try {
				await dispath(getDht());
			} catch (error) {}
		})();
	}, []);

	return (
		<>
			<div className="w-full md:w-1/2 xl:w-1/3 p-6">
				{/* <!--Metric Card--> */}
				<div className="bg-gradient-to-b from-blue-200 to-blue-100 border-b-4 border-blue-500 rounded-lg shadow-xl p-5">
					<div className="flex flex-row items-center">
						<div className="flex-shrink pr-4">
							<div className="rounded-full p-5 ">
								<img src="temperature.png" alt=''  className='w-[30px] h-[30px]'/>
							</div>
						</div>
						<div className="flex-1 text-right md:text-center">
							<h2 className="font-bold uppercase text-gray-600">
								Nhiệt độ
							</h2>
							<p className="font-bold text-2xl">
								{temp ? temp + '°C' : 'Không có dữ liệu'}
							</p>
						</div>
					</div>
				</div>
				{/* <!--/Metric Card--> */}
			</div>
			<div className="w-full md:w-1/2 xl:w-1/3 p-6">
				{/* <!--Metric Card--> */}
				<div className="bg-gradient-to-b from-indigo-200 to-indigo-100 border-b-4 border-indigo-500 rounded-lg shadow-xl p-5">
					<div className="flex flex-row items-center">
						<div className="flex-shrink pr-4">
							<div className="rounded-full p-5">
							<img src="humidity.png" alt=''  className='w-[30px] h-[30px]'/>

							</div>
						</div>
						<div className="flex-1 text-right md:text-center">
							<h2 className="font-bold uppercase text-gray-600">
								Độ ẩm
							</h2>
							<p className="font-bold text-2xl">
								{humi ? humi + '%' : 'Không có dữ liệu'}
							</p>
						</div>
					</div>
				</div>
				{/* <!--/Metric Card--> */}
			</div>
		</>
	);
}
