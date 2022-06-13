const express = require('express');
const { asyncHandler, csrfProtection } = require('../utils');
const { requireAuth } = require('../../utils/auth');
const router = express.Router();
const db = require('../../db/models');

router.get(
  '/',
  asyncHandler(async (req, res) => {
    const product = await db.Product.findAll();
    // console.log(businessess, "**************")
    // console.log('************************First****************************');
    res.json(product);
  })
);

router.get(
  '/:productId',
  asyncHandler(async (req, res) => {
    const { productId } = req.params;
    const product = await db.Product.findByPk(productId);
    // console.log('**************************Second**************************');
    return res.json(product);
  })
);

module.exports = router;
