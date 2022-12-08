const utsModels = require('../Models/utsModels');
const utsController = {
	toggle: async (req, res) => {
		try {
			const uts = await utsModels.findOne({});
			if (!uts) {
				const newUts = new utsModels({ state: true });
				await newUts.save();
				return res.json({ uts: newUts });
			}
			const newUts = await utsModels.findByIdAndUpdate(
				uts._id,
				{ state: !uts.state },
				{ new: true },
			);
			return res.json({ uts: newUts });
		} catch (error) {}
	},
	get: async (req, res) => {
		try {
			const uts = await utsModels.findOne({});
			if (!uts)
				return res.json({
					message: 'Cảm biến siêu âm chưa có thông tin',
				});
			return res.json({ uts });
		} catch (error) {}
	},
	update: async (req, res) => {
		try {
			const uts = await utsModels.findOne({});
			const { state } = req.body;
			if (!uts) {
				const newUts = new utsModels({ state });
				await newUts.save();
				return res.json({ uts: newUts });
			} else {
				const newUts = await utsModels.findByIdAndUpdate(
					uts._id,
					{ state },
					{ new: true },
				);
				return res.json({ uts: newUts });
			}
		} catch (error) {}
	},
};

module.exports = utsController;
