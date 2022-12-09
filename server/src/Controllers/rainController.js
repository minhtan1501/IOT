const rainModels = require('../Models/rainModel');
const rainController = {
	update: async (req, res) => {
		try {
			const rain = await rainModels.findOne({});
			const { state } = req.body;
			if (!rain) {
				const newRain = new rainModels({ state });
				await newRain.save();
				return res.json({ rain: newRain });
			} else {
				const newRain = await rainModels.findByIdAndUpdate(
					rain._id,
					{ state },
					{ new: true },
				);
				return res.json({ rain: newRain });
			}
		} catch (error) {}
	},
	getRain: async (req, res) => {
		try {
			const rain = await rainModels.findOne({});
			if (!rain) return res.json({ message: 'rain chưa có thông tin' });
			return res.json({ rain });
		} catch (error) {}
	},
};

module.exports = rainController;
