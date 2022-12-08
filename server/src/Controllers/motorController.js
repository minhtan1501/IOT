const motorModels = require('../Models/motorModel');
const motorController = {
	update: async (req, res) => {
		try {
			const motor = await motorModels.findOne({});
			const { state } = req.body;
			if (!motor) {
				const newMotor = new motorModels({ state });
				await newMotor.save();
				return res.json({ motor: newMotor });
			} else {
				const newMotor = await motorModels.findByIdAndUpdate(
					motor._id,
					{ state },
					{ new: true },
				);
				return res.json({ motor: newMotor });
			}
		} catch (error) {}
	},
	getMotor: async (req, res) => {
		try {
			const motor = await motorModels.findOne({});
			if (!motor) return res.json({ message: 'motor chưa có thông tin' });
			return res.json({ motor });
		} catch (error) {}
	},
};

module.exports = motorController;
