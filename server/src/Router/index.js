const routerLed = require('./ledRouter');
const routerDht = require('./dhtRouter');
const routerGas = require('./gasRouter');
const routerLdr = require('./ldrRouter');
const routerUts = require('./utsRouter');
const routerRain = require('./rainRouter');
const routerMotor = require('./motorRouter');

const router = (app) => {
	app.use('/api/led', routerLed);
	app.use('/api/dht', routerDht);
	app.use('/api/gas', routerGas);
	app.use('/api/ldr', routerLdr);
	app.use('/api/uts', routerUts);
	app.use('/api/rain', routerRain);
	app.use('/api/motor', routerMotor);
};

module.exports = router;
