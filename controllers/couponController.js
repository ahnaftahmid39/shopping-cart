const { Coupon } = require('../models/coupon');

// admin authorize
module.exports.getCoupons = async (req, res) => {
  const coupons = await Coupon.find();
  return res.status(200).send(coupons);
};

// admin authorize
module.exports.createCoupon = async (req, res) => {
  const coupon = new Coupon(req.body);
  const result = coupon.save();
  return res
    .status(201)
    .send({ data: result, message: 'Created a coupon successfully' });
};

module.exports.validateCoupon = async (req, res) => {
  const code = req.body.code;
  const coupon = await Coupon.findOne({ code: code });
  return res.status(200).send(coupon);
};
