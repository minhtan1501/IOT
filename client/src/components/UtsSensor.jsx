import React from 'react';

export default function UtsSensor() {
	return (
		<div className="bg-gradient-to-b from-yellow-200 to-yellow-100 border-b-4 border-yellow-600 rounded-lg shadow-xl p-5">
			<div className="flex flex-row items-center">
				<div className="flex-shrink pr-4">
					<div className="rounded-full p-5 bg-yellow-600">
						<i className="fas fa-user-plus fa-2x fa-inverse"></i>
					</div>
				</div>
				<div className="flex-1 text-right md:text-center">
					<h2 className="font-bold uppercase text-gray-600">
						Utrasonic Sensor
					</h2>
					<p className="font-bold text-3xl">
						2{' '}
						<span className="text-yellow-600">
							<i className="fas fa-caret-up"></i>
						</span>
					</p>
				</div>
			</div>
		</div>
	);
}
