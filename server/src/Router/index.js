const routerLed = require('./ledRouter');
const routerDht = require('./dhtRouter');
const routerGas = require('./gasRouter');
const routerLdr = require('./ldrRouter');
const routerUts = require('./utsRouter');

const router = (app) => {
	app.use('/api/led', routerLed);
	app.use('/api/dht', routerDht);
	app.use('/api/gas', routerGas);
	app.use('/api/ldr', routerLdr);
	app.use('/api/uts', routerUts);
};

module.exports = router;
