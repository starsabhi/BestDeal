const express = require('express');
const { asyncHandler, csrfProtection } = require('../utils');
const { requireAuth } = require('../../utils/auth');
const router = express.Router();
const db = require('../../db/models');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const validateCart = [
  check('quantity')
    .isInt({ max: 10 })
    .withMessage('Maximum 10 same items per Cart. Please check your Cart.'),
  handleValidationErrors,
];

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
  validateCart,
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

router.patch(
  '/:cartId',
  validateCart,
  requireAuth,
  asyncHandler(async (req, res) => {
    const { userId, productId, name, price, imageUrl, quantity } = req.body;

    const { cartId } = req.params;

    const cart = await db.Cart.findByPk(cartId);
    // console.log(cart, 'THIS IS UPDATED REVIEW');

    await cart.update({
      userId,
      productId,
      name,
      price,
      imageUrl,
      quantity,
    });
    res.json(cart);
  })
);

router.delete(
  '/:cartId',
  requireAuth,
  asyncHandler(async (req, res) => {
    const { cartId } = req.params;
    const cart = await db.Cart.findByPk(cartId);
    await cart.destroy();
    res.json(cart.id);
  })
);

// router.delete(
//   '/full/:userId',
//   requireAuth,
//   asyncHandler(async (req, res) => {
//     console.log('&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&');
//     const { userId } = req.params;
//     const cartFull = await db.Cart.destroy({
//       where: {
//         userId: userId,
//       },
//     });
//     console.log('********************************************');
//     // await cartFull.destroy();
//     console.log('********************************************');
//     res.json(userId);
//   })
// );

module.exports = router;
