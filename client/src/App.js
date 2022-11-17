import './App.css';
import './components/LdrSensor';
import './components/GasSensor';
import './components/DhtSensor';
import './components/UtsSensor';
import GasSensor from './components/GasSensor';
import LdrSensor from './components/LdrSensor';
import UtsSensor from './components/UtsSensor';
import DhtSensor from './components/DhtSensor';

function App() {
	return (
		<main>
			<div className="flex flex-col">
				<section>
					<div
						id="main"
						className="main-content flex-1 bg-gray-100 mt-12 md:mt-2 pb-24 md:pb-5"
					>
						<div className="bg-gray-800 pt-3">
							<div className="rounded-tl-3xl bg-gradient-to-r from-blue-900 to-gray-800 p-4 shadow text-2xl text-white">
								<h1 className="font-bold pl-2">
									Nhà Thông Minh
								</h1>
							</div>
						</div>

						<div className="flex flex-wrap">
							<div className="w-full md:w-1/2 xl:w-1/3 p-6">
								<LdrSensor />
							</div>
							<div className="w-full md:w-1/2 xl:w-1/3 p-6">
								<GasSensor />
							</div>
							<div className="w-full md:w-1/2 xl:w-1/3 p-6">
								<UtsSensor />
							</div>
							<DhtSensor />
						</div>
					</div>
				</section>
			</div>
		</main>
	);
}

export default App;
