const Order = require("../models/Order");
const User = require("../models/User");
require("../models/Product");
require("../models/User");

const createOrder = async (req, res) => {
  const { email, products } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const booking = await Order.create({
      user: user._id,
      products,
    });
    res.json({ ...booking, success: true });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

const getUserOrders = async (req, res) => {
  const { id } = req.params;

  try {
    const orders = await Order.find({
      user: id,
    }).populate({
      path: "user",
      model: "User",
      select: "name email",
    });

    return res.json(orders);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  createOrder,
  getUserOrders,
};
