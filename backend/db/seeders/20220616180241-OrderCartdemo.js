'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert(
      'OrderCarts',
      [
        {
          orderId: 1,
          name: 'COKAFIL Mens Running Shoes Athletic Walking Blade Tennis Shoes Fashion Sneakers',
          userId: 1,
          productId: 3,
          quantity: 2,
          imageUrl:
            'https://m.media-amazon.com/images/I/61IcMWPWFDL._AC_UX679_.jpg',
          price: '10',
          createdAt: '2018-10-07',
          updatedAt: '2018-10-07',
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkDelete('OrderCarts', null, {});
  },
};
