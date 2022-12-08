const mongoose = require('mongoose');

const rainSchema = new mongoose.Schema(
	{
		state: { type: Boolean, default: false },
	},
	{
		timestamps: true,
	},
);

module.exports = mongoose.model('rain', rainSchema);
