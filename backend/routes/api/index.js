// backend/routes/api/index.js
const router = require('express').Router();

const asyncHandler = require('express-async-handler');
const { setTokenCookie } = require('../../utils/auth');
const { User } = require('../../db/models');

const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const productRouter = require('./products');
const reviewRouter = require('./reviews');
const cartRouter = require('./carts');
const orderRouter = require('./orders');
const orderCartRouter = require('./ordercart')

router.use('/session', sessionRouter);

router.use('/users', usersRouter);

router.use('/products', productRouter);

router.use('/review', reviewRouter);

router.use('/cart', cartRouter);

router.use('/order', orderRouter);


router.use('/ordercart', orderCartRouter);

// router.post('/test', (req, res) => {
//   res.json({ requestBody: req.body });
// });

// router.post('/test', function (req, res) {
//   res.json({ requestBody: req.body });
// });

// // GET /api/set-token-cookie
// router.get(
//   '/set-token-cookie',
//   asyncHandler(async (_req, res) => {
//     const user = await User.findOne({
//       where: {
//         username: 'Demo-lition',
//       },
//     });
//     setTokenCookie(res, user);
//     return res.json({ user });
//   })
// );

// const { restoreUser } = require('../../utils/auth.js');
// router.get('/restore-user', restoreUser, (req, res) => {
//   return res.json(req.user);
// });

// // GET /api/require-auth
// const { requireAuth } = require('../../utils/auth.js');
// router.get('/require-auth', requireAuth, (req, res) => {
//   return res.json(req.user);
// });
module.exports = router;
