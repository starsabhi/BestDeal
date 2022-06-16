'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert(
      'Orders',
      [
        {
          userId: 1,
          totalPrice: '40.99',
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
    return queryInterface.bulkDelete('Orders', null, {});
  },
};
