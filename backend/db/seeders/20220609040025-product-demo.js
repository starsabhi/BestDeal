'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert(
      'Products',
      [
        {
          name: "Essentials Men's Regular-fit Long-Sleeve Flannel Shirt",
          price: '10.00',
          imageUrl:
            'https://m.media-amazon.com/images/I/A1Dm49fDO0L._AC_UL1500_.jpg',
          description:
            'Everyday made better: we listen to customer feedback and fine-tune every detail to ensure quality, fit, and comfort',
          productInfo:
            'This weekend-perfect casual button-front shirt in a midweight flannel is a go-to pick when the temperature drops',
          category: 'cloths',
        },
        {
          name: "Essentials Men's Regular-fit Long-Sleeve Flannel Shirt",
          price: '10.00',
          imageUrl:
            'https://m.media-amazon.com/images/I/A1Dm49fDO0L._AC_UL1500_.jpg',
          description:
            'Everyday made better: we listen to customer feedback and fine-tune every detail to ensure quality, fit, and comfort',
          productInfo:
            'This weekend-perfect casual button-front shirt in a midweight flannel is a go-to pick when the temperature drops',
          category: 'cloths',
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
    return queryInterface.bulkDelete('Products', null, {});
  },
};
