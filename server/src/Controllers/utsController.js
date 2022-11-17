const utsModels = require('../Models/utsModels');
const utsController = {
	update: async (req, res) => {
		try {
			const uts = await utsModels.findOne({});
			const { value = 0 } = req.body;
			if (!uts) {
				const newUts = new utsModels({ value });
				await newUts.save();
				return res.json({ uts: newUts });
			}
			const newUts = await utsModels.findByIdAndUpdate(
				uts._id,
				{ value },
				{ new: true },
			);
			console.log(newUts);
			return res.json({ uts: newUts });
		} catch (error) {}
	},
	get: async (req, res) => {
		try {
			const uts = await utsModels.findOne({});
			if (!uts) return res.json({ message: 'uts chưa có thông tin' });
			return res.json({ uts });
		} catch (error) {}
	},
};

module.exports = utsController;
