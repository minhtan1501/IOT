const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    temperature: { type: Number, default: 0 },
    humidity: { type: Number, default: 0 },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("dht", schema);
