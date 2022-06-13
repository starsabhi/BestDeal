'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert(
      'Carts',
      [
        {
          userId: '1',
          productId: '1',
          name: "Essentials Men's Regular-fit Long-Sleeve Flannel Shirt",
          imageUrl: 'https://m.media-amazon.com/images/I/31V7R+fPOfL._AC_.jpg',
          price: '10.00',
          quantity: '1',
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
    return queryInterface.bulkDelete('Carts', null, {});
  },
};
