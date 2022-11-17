const mongoose = require('mongoose');

const utsSchema = new mongoose.Schema(
	{
		value: { type: Number, default: 0 },
	},
	{
		timestamps: true,
	},
);

module.exports = mongoose.model('uts', utsSchema);
