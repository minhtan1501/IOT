const dhtModels = require("../Models/dhtModels");

const dhtController = {
  store: async (req, res) => {
    try {
      const { temp = null, hum = null } = req.body;
      const newDht = new dhtModels({
        temperature: temp,
        humidity: hum,
      });
      await newDht.save();
      return res.status(200).json({ dht: newDht });
    } catch (error) {}
  },
  getDht: async (req, res) => {
    try {
      const dht = await dhtModels.findOne({}).sort({ createdAt: -1 });
      console.log(dht);
      if (!dht)
        return res.status(400).json({ message: "Dht chưa có thông tin" });
      return res.status(200).json({ dht: dht });
    } catch (error) {}
  },
  getAllDht: async (req, res) => {
    try {
      const dht = await dhtModels.find({}).sort({ createdAt: 1 });
      if (!dht)
        return res.status(400).json({ message: "Dht chưa có thông tin" });

      return res.json({ dht: dht });
    } catch (error) {}
  },
};

module.exports = dhtController;
