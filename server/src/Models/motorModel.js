const mongoose = require('mongoose');

const motorSchema = new mongoose.Schema(
	{
		state: { type: Boolean, default: false },
	},
	{
		timestamps: true,
	},
);

module.exports = mongoose.model('motor', motorSchema);
