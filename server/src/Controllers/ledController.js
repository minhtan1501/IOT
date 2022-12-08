const ledModels = require('../Models/ledModels');
const ledController = {
	toggle: async (req, res) => {
		try {
			const led = await ledModels.findOne({});
			if (!led) {
				const newLed = new ledModels({ state: false });
				await newLed.save();
				return res.json({ led: newLed });
			}
			const newLed = await ledModels.findByIdAndUpdate(
				led._id,
				{ state: !led.state },
				{ new: true },
			);
			return res.json({ led: newLed });
		} catch (error) {}
	},
	getLed: async (req, res) => {
		try {
			const led = await ledModels.findOne({});
			if (!led) return res.json({ message: 'led chưa có thông tin' });
			return res.json({ led });
		} catch (error) {}
	},
};

module.exports = ledController;
