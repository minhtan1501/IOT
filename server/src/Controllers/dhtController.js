const dhtModels = require("../Models/dhtModels");

const dhtController = {
  store: async (req, res) => {
    try {
      const { temperature = null, humidity = null } = req.body;
      const newDht = new dhtModels({
        temperature,
        humidity
      });
      await newDht.save();
      return res.status(200).json({ dht: newDht });
    } catch (error) {}
  },
  getDht: async (req, res) => {
    try {
      const dht = await dhtModels.findOne({}).sort({ createdAt: -1 });
      if (!dht)
        return res.status(400).json({ message: "Dht chưa có thông tin" });
      return res.status(200).json({ dht: dht });
    } catch (error) {}
  },
  getAllDht: async (req, res) => {
    try {
      const dht = await dhtModels.find({}).sort({ createdAt: -1 }).limit(10);
      if (!dht)
        return res.status(400).json({ message: "Dht chưa có thông tin" });

      return res.json({ dht: dht });
    } catch (error) {}
  },
};

module.exports = dhtController;
