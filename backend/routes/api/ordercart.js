const express = require('express');
const { asyncHandler, csrfProtection } = require('../utils');
const { requireAuth } = require('../../utils/auth');
const router = express.Router();
const db = require('../../db/models');

// router.get(
//   '/:userId',
//   asyncHandler(async (req, res) => {
//     const { userId } = req.params;

//     const carts = await db.Cart.findAll({
//       where: {
//         userId: userId,
//       },
//     });
//     return res.json(carts);
//   })
// );

router.post(
  '/',
  requireAuth,
  asyncHandler(async (req, res) => {
    // console.log("ROUTER COMPLETED OR NOT   *********************")
    const {
      orderId,
      userId,
      productId,
      name,
      price,
      imageUrl,
      quantity,
      totalPrice,
    } = req.body;
    // console.log("ROUTER COMPLETED OR NOT   *********************")

    const newOrderCart = await db.OrderCart.create({
      orderId,
      userId,
      productId,
      name,
      price,
      imageUrl,
      quantity,
      totalPrice,
    });
    res.json(newOrderCart);
  })
);

module.exports = router;
