const ldrModels = require("../Models/ldrModels");

const ldrController = {
  create: async (req, res) => {
    try {
      const { value = 0 } = req.body;
      const ldrNew = new ldrModels({ value });
      await ldrNew.save();
      return res.status(200).json({ ldr: ldrNew });
    } catch (error) {}
  },
  get: async (req, res) => {
    try {
      const ldr = await ldrModels.findOne({}).sort({ createdAt: -1 });
      if (!ldr)
        return res.status(400).json({ message: "Không có thông tin ldr" });
      return res.status(200).json({ ldr });
    } catch (error) {}
  },
  getAll: async (req, res) => {
    try {
      const ldr = await ldrModels.find({}).sort({ createdAt: 1 });
      if (!ldr)
        return res.status(400).json({ message: "Không có thông tin ldr" });
      return res.status(200).json({ ldr });
    } catch (error) {}
  },
};

module.exports = ldrController;
