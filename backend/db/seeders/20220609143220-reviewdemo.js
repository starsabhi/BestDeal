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
          userId: '2',
          productId: '1',
          rating: '4',
          content:
            'I like this shirt. I can use this one any time very nice!!!',
        },
        {
          userId: '2',
          productId: '2',
          rating: '4',
          content: "I don't like this shirt.",
        },
        {
          userId: '2',
          productId: '3',
          rating: '4',
          content: 'I can use this for various parties!!!',
        },
        {
          userId: '3',
          productId: '3',
          rating: '4',
          content: 'One of the best shoes in BESTDEAL!!! THANK YOU BEST DEAL',
        },
        {
          userId: '3',
          productId: '3',
          rating: '4',
          content: 'I really like this shoes!',
        },
        {
          userId: '3',
          productId: '4',
          rating: '4',
          content:
            'It is not bad shirt for this price and I love bestDEAL and thier offers!!!',
        },
        {
          userId: '3',
          productId: '5',
          rating: '4',
          content: 'It is one of the best Shoes Sneakers !!!',
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
