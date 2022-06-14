const express = require('express');
const { asyncHandler, csrfProtection } = require('../utils');
const { requireAuth } = require('../../utils/auth');
const router = express.Router();
const db = require('../../db/models');

router.get(
  '/:userId',
  asyncHandler(async (req, res) => {
    const { userId } = req.params;

    const orders = await db.Order.findAll({
      where: {
        userId: userId,
      },
    });
    return res.json(orders);
  })
);

router.post(
  '/',
  requireAuth,
  asyncHandler(async (req, res) => {
    // console.log("ROUTER COMPLETED OR NOT   *********************")
    const { userId, totalPrice } = req.body;
    // console.log("ROUTER COMPLETED OR NOT   *********************")

    const newOrder = await db.Order.create({
      userId,
      totalPrice,
    });
    res.json(newOrder);
  })
);

router.delete(
  '/:orderId',
  requireAuth,
  asyncHandler(async (req, res) => {
    const { orderId } = req.params;
    const order = await db.Order.findByPk(orderId);
    await order.destroy();
    res.json(order.id);
  })
);

module.exports = router;
