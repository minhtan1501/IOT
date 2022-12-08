const transport = require('../Config/Mail');
const { verifyEmail } = require('../Config/TemplateMail');
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
	sendMail: async (req,res) => {
		try {
			const r =  await transport.sendMail({
				from: "vlute@t&t.com",
				to: "19004112@st.vlute.edu.vn",
				subject: "Cảnh báo",
				html: verifyEmail("Cảnh báo trời mưa"),
			});
			return res.json({message: "ok"});
		} catch (error) {
			
		}
	}
};

module.exports = rainController;
