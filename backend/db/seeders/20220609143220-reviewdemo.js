'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert(
      'Reviews',
      [
        {
          userId: '1',
          productId: '1',
          rating: '4',
          content:
            'I like this shirt. I can use this one any time very nice!!!',
        },
        {
          userId: '1',
          productId: '2',
          rating: '4',
          content:
            "I don't like this shirt. I can use this one any time very nice!!!",
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
    return queryInterface.bulkDelete('Reviews', null, {});
  },
};
