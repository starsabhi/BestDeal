const express = require('express');
const { asyncHandler, csrfProtection } = require('../utils');
const { requireAuth } = require('../../utils/auth');
const router = express.Router();
const db = require('../../db/models');

router.get(
  '/:orderId',
  asyncHandler(async (req, res) => {
    const { orderId } = req.params;

    const orderCarts = await db.OrderCart.findAll({
      where: {
        orderId: orderId,
      },
    });
    return res.json(orderCarts);
  })
);

router.post(
  '/',
  requireAuth,
  asyncHandler(async (req, res) => {
    // console.log("ROUTER COMPLETED OR NOT   *********************")
    const { orderId, userId, productId, name, price, imageUrl, quantity } =
      req.body;
    // console.log("ROUTER COMPLETED OR NOT   *********************")

    const newOrderCart = await db.OrderCart.create({
      orderId,
      userId,
      productId,
      name,
      price,
      imageUrl,
      quantity,
    });
    res.json(newOrderCart);
  })
);

router.patch(
  '/:orderCartId',
  requireAuth,
  asyncHandler(async (req, res) => {
    const { orderId, userId, productId, name, price, imageUrl, quantity } =
      req.body;

    console.log(req.body, '*************************************************');

    const { orderCartId } = req.params;
    console.log('WHIRERER********111111111111111111111111111111');

    const orderCart = await db.OrderCart.findByPk(orderCartId);
    console.log('WHIRERER********2222222222222222222222222222222222222222222');

    await orderCart.update({
      orderId,
      userId,
      productId,
      name,
      price,
      imageUrl,
      quantity,
    });
    res.json(orderCart);
  })
);

router.delete(
  '/:cartOrderId',
  requireAuth,
  asyncHandler(async (req, res) => {
    const { cartOrderId } = req.params;
    const cartOrder = await db.OrderCart.findByPk(cartOrderId);
    await cartOrder.destroy();
    res.json(cartOrder.id);
  })
);

module.exports = router;
