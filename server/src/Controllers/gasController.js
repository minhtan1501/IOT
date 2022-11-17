const gasModels = require("../Models/gasModels");

const gasController = {
  create: async (req, res) => {
    try {
      const { value = 0 } = req.body;
      const gasNew = new gasModels({ value });
      await gasNew.save();
      return res.status(200).json({ gas: gasNew });
    } catch (error) {}
  },
  get: async (req, res) => {
    try {
      const gas = await gasModels.findOne({}).sort({ createdAt: -1 });
      if (!gas)
        return res.status(400).json({ message: "Không có thông tin gas" });
      return res.status(200).json({ gas });
    } catch (error) {}
  },
  getAll: async (req, res) => {
    try {
      const gas = await gasModels.find({}).sort({ createdAt: 1 });
      if (!gas)
        return res.status(400).json({ message: "Không có thông tin gas" });
      return res.status(200).json({ gas });
    } catch (error) {}
  },
};

module.exports = gasController;
