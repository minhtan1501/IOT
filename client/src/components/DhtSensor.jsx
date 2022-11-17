import React from 'react';

export default function DhtSensor() {
	return (
		<>
			<div className="w-full md:w-1/2 xl:w-1/3 p-6">
				{/* <!--Metric Card--> */}
				<div className="bg-gradient-to-b from-blue-200 to-blue-100 border-b-4 border-blue-500 rounded-lg shadow-xl p-5">
					<div className="flex flex-row items-center">
						<div className="flex-shrink pr-4">
							<div className="rounded-full p-5 bg-blue-600">
								<i className="fas fa-server fa-2x fa-inverse"></i>
							</div>
						</div>
						<div className="flex-1 text-right md:text-center">
							<h2 className="font-bold uppercase text-gray-600">
								Temperature
							</h2>
							<p className="font-bold text-3xl">152 days</p>
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
							<div className="rounded-full p-5 bg-indigo-600">
								<i className="fas fa-tasks fa-2x fa-inverse"></i>
							</div>
						</div>
						<div className="flex-1 text-right md:text-center">
							<h2 className="font-bold uppercase text-gray-600">
								Humidity
							</h2>
							<p className="font-bold text-3xl">7 tét ne</p>
						</div>
					</div>
				</div>
				{/* <!--/Metric Card--> */}
			</div>
		</>
	);
}
