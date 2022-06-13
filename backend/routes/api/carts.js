const express = require('express');
const { asyncHandler, csrfProtection } = require('../utils');
const { requireAuth } = require('../../utils/auth');
const router = express.Router();
const db = require('../../db/models');

router.get(
  '/:userId',
  asyncHandler(async (req, res) => {
    const { userId } = req.params;

    const carts = await db.Cart.findAll({
      where: {
        userId: userId,
      },
    });
    return res.json(carts);
  })
);

router.post(
  '/',
  requireAuth,
  asyncHandler(async (req, res) => {
    // console.log("ROUTER COMPLETED OR NOT   *********************")
    const { userId, productId, name, price, imageUrl, quantity } = req.body;
    // console.log("ROUTER COMPLETED OR NOT   *********************")

    const newCart = await db.Cart.create({
      userId,
      productId,
      name,
      price,
      imageUrl,
      quantity,
    });
    res.json(newCart);
  })
);

module.exports = router;
