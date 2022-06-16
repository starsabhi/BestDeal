const express = require('express');
const { asyncHandler, csrfProtection } = require('../utils');
const { requireAuth } = require('../../utils/auth');
const router = express.Router();
const db = require('../../db/models');
const { handleValidationErrors } = require('../../utils/validation');
const { check } = require('express-validator');

const validateReview = [
  check('content')
    .exists({ checkFalsy: true })
    .withMessage('Review cannot be empty')
    .isLength({ min: 5 })
    .withMessage('Review should have at least 5 characters')
    .custom((value) => !/^ *$/.test(value))
    .withMessage('Review must contain characters'),
  handleValidationErrors,
];

router.get(
  '/:productId',
  asyncHandler(async (req, res) => {
    const { productId } = req.params;
    // const business = await db.Business.findByPk(productId);
    const reviews = await db.Review.findAll({
      where: {
        productId,
      },
      include: [{ model: db.User }],
    });
    return res.json(reviews);
  })
);

router.get(
  '/:productId/:reviewId',
  asyncHandler(async (req, res) => {
    const { reviewId } = req.params;
    console.log(reviewId, '*********************');
    // console.log(reviewId,"GETTING ANYTHING FOR SPECIAL DETAIL PAGE$")
    // console.log(reviewId,"GETTING ANYTHING FOR SPECIAL DETAIL PAGE$")
    const review = await db.Review.findByPk(reviewId);
    console.log(review, '*********************');
    // console.log(review)
    return res.json(review);
  })
);

router.post(
  '/',
  requireAuth,
  validateReview,
  asyncHandler(async (req, res) => {
    // console.log("ROUTER COMPLETED OR NOT   *********************")
    const { userId, productId, rating, content } = req.body;
    // console.log("ROUTER COMPLETED OR NOT   *********************")

    const newReview = await db.Review.create({
      userId,
      productId,
      rating,
      content,
    });
    res.json(newReview);
  })
);

router.patch(
  '/:reviewId',
  validateReview,
  requireAuth,
  asyncHandler(async (req, res) => {
    // console.log(req.body);

    const { userId, productId, rating, content } = req.body;

    const { reviewId } = req.params;
    // console.log('THIS IS ID', { reviewId });

    const review = await db.Review.findByPk(reviewId);
    // console.log(review, 'THIS IS UPDATED REVIEW');

    await review.update({
      userId,
      productId,
      rating,
      content,
    });
    res.json(review);
  })
);

router.delete(
  '/:reviewId',
  requireAuth,
  asyncHandler(async (req, res) => {
    const { reviewId } = req.params;
    const review = await db.Review.findByPk(reviewId);
    await review.destroy();
    res.json(review.id);
  })
);

module.exports = router;
