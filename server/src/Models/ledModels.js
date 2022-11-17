const mongoose = require("mongoose");


const ledSchema = new mongoose.Schema(
  {
    state: {type: Boolean, default: false},
  },
  {
    timestamps: true,
  }
);


module.exports = mongoose.model("led", ledSchema);
