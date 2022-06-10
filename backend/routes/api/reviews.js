const express = require('express');
const { asyncHandler, csrfProtection } = require('../utils');
const { requireAuth } = require('../../utils/auth');
const router = express.Router();
const db = require('../../db/models');

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
  asyncHandler(async (req, res) => {
    // console.log(req.body);

    const { userId, productId, rating, content } = req.body;

    console.log('THIS IS BODY', {
      userId,
      productId,
      rating,
      content,
    });

    const { reviewId } = req.params;
    console.log('THIS IS ID', { reviewId });

    const review = await db.Review.findByPk(reviewId);
    console.log(review, 'THIS IS UPDATED REVIEW');

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
  asyncHandler(async (req, res) => {
    const { reviewId } = req.params;

    const review = await db.Review.findByPk(reviewId);

    await review.destroy();
    res.json(review.id);
  })
);

module.exports = router;
