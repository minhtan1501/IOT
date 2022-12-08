const mongoose = require('mongoose');

const utsSchema = new mongoose.Schema(
	{
	  state: {type: Boolean, default: false},
	},
	{
	  timestamps: true,
	}
  );

module.exports = mongoose.model('uts', utsSchema);
