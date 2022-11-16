const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    value: { type: Number, required: true, default: 0 },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("ldr", schema);
