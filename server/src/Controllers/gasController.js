const gasModels = require('../Models/gasModels');
const transport = require('../Config/Mail');
const { verifyEmail } = require('../Config/TemplateMail');
const gasController = {
	create: async (req, res) => {
		try {
			const { value = 0 } = req.body;
			const gasNew = new gasModels({ value });
			await gasNew.save();
			return res.status(200).json({ gas: gasNew });
		} catch (error) {}
	},
	get: async (req, res) => {
		try {
			const gas = await gasModels.findOne({}).sort({ createdAt: -1 });
			if (!gas)
				return res
					.status(400)
					.json({ message: 'Không có thông tin gas' });
			return res.status(200).json({ gas });
		} catch (error) {}
	},
	getAll: async (req, res) => {
		try {
			const gas = await gasModels.find({}).sort({ createdAt: 1 });
			if (!gas)
				return res
					.status(400)
					.json({ message: 'Không có thông tin gas' });
			return res.status(200).json({ gas });
		} catch (error) {}
	},
	sendMail: async (req, res) => {
		try {
			const r = await transport.sendMail({
				from: 'vlute@t&t.com',
				to: '19004222@st.vlute.edu.vn',
				subject: 'Cảnh báo',
				html: verifyEmail('Cảnh báo rò rỉ khí gas'),
			});
			return res.json({ message: 'ok' });
		} catch (error) {}
	},
};

module.exports = gasController;
