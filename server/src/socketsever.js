let users = [];
const request = require('request');

const SocketServer = (socket) => {
	socket.on('joinUser', () => {
		users.push(socket.id);
	});

	const mqtt = require('mqtt').connect('mqtt://broker.emqx.io:1883');

	mqtt.on('connect', () => {
		mqtt.subscribe(
			[
				'dhtClient',
				'ldrClient',
				'servoClient',
				'ledClient',
				'gasClient',
				'utsClient',
				'rainClient',
				'ledState',
				'servoState',
			],
			() => {
				console.log(`Subscribe to all topic`);
			},
		);
	});

	mqtt.on('message', async (topic, payload) => {
		if (topic == 'ledState') {
			const { led } = await makeRequest(
				'http://localhost:5000/api/led/get',
			);
			mqtt.publish('ledServer', led.state ? 'on' : 'off');
		} else if (topic == 'servoState') {
			const { motor } = await makeRequest(
				'http://localhost:5000/api/motor/get',
			);
			console.log(motor);
			mqtt.publish('servoServer', motor?.state ? 'on' : 'off');
		} else {
			const data = payload.toString()
				? JSON.parse(payload.toString())
				: null;
			let url = 'http://localhost:5000';
			let method = 'POST';
			try {
				switch (topic) {
					case 'dhtClient':
						url += '/api/dht/store';
						break;
					case 'gasClient':
						url += '/api/gas/create';
						break;
					case 'ldrClient':
						url += '/api/ldr/create';
						break;
					case 'utsClient':
						url += '/api/uts/update';
						break;
					case 'rainClient':
						url += '/api/rain/update';
						break;
					case 'ledClient':
						url += '/api/led/toggle';
						method = 'GET';
						break;
					case 'servoClient':
						url += '/api/motor/update';
						break;
				}

				const res = await makeRequest(url, method, data);

				if (res) {
					users.forEach((a) => {
						socket.to(`${a}`).emit(`${topic}`, res);
					});
				}
			} catch (error) {
				// console.log(error);
			}
		}
	});

	socket.on('disconnect', () => {
		users = users.filter((user) => user !== socket.id);
	});

	socket.on('ledServer', (state) => {
		mqtt.publish('ledServer', state ? 'on' : 'off');
	});

	socket.on('servoServer', (state) => {
		mqtt.publish('servoServer', state ? 'on' : 'off');
	});
};

function makeRequest(url, method = 'GET', data) {
	const options = { method, json: method == 'GET' ? true : data };
	return new Promise(function (resolve, reject) {
		request(url, options, function (error, res, body) {
			if (!error && res.statusCode === 200) {
				resolve(body);
			} else {
				reject(error);
			}
		});
	});
}

module.exports = SocketServer;
