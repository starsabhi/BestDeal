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
          username: 'FakeUser1',
        },
        {
          userId: '2',
          productId: '2',
          rating: '4',
          content: "I don't like this shirt.",
          username: 'FakeUser1',
        },
        {
          userId: '2',
          productId: '3',
          rating: '4',
          content: 'I can use this for various parties!!!',
          username: 'FakeUser1',
        },
        {
          userId: '3',
          productId: '3',
          rating: '4',
          content: 'One of the best shoes in BESTDEAL!!! THANK YOU BEST DEAL',
          username: 'FakeUser2',
        },
        {
          userId: '3',
          productId: '3',
          rating: '4',
          content: 'I really like this shoes!',
          username: 'FakeUser2',
        },
        {
          userId: '3',
          productId: '4',
          rating: '4',
          content:
            'It is not bad shirt for this price and I love bestDEAL and thier offers!!!',
          username: 'FakeUser2',
        },
        {
          userId: '3',
          productId: '5',
          rating: '4',
          content: 'It is one of the best Shoes Sneakers !!!',
          username: 'FakeUser2',
        },
        {
          userId: '4',
          productId: '1',
          rating: '5',
          content: 'I always find best shirts on bestDeal!!!',
          username: 'Lenagold',
        },
        {
          userId: '5',
          productId: '1',
          rating: '5',
          content: 'Quality of this shirt is best. I really love it',
          username: 'ArronRogers',
        },
        {
          userId: '3',
          productId: '2',
          rating: '5',
          content:
            "Flannel Shirt's are best and specially with bestdeal is more cheaper.",
          username: 'TomBrady',
        },
        {
          userId: '4',
          productId: '2',
          rating: '3',
          content: 'It is okay shirt.',
          username: 'Lenagold',
        },
        {
          userId: '4',
          productId: '3',
          rating: '4',
          content:
            'COKAFIL Mens running shoes are most conformable shoes I ever had.',
          username: 'Lenagold',
        },
        {
          userId: '3',
          productId: '3',
          rating: '5',
          content: 'Only for 20.99 dollars. OMG!! best price ever!!',
          username: 'TomBrady',
        },
        {
          userId: '2',
          productId: '4',
          rating: '3',
          content: 'Not bad for this price. I think it is okay',
          username: 'JoshAllen',
        },
        {
          userId: '3',
          productId: '4',
          rating: '3',
          content: 'I buy this one only for 10 dollars wowo!!',
          username: 'TomBrady',
        },
        {
          userId: '4',
          productId: '5',
          rating: '4',
          content: 'This Sneakers are perfect for me!!',
          username: 'Lenagold',
        },
        {
          userId: '2',
          productId: '5',
          rating: '2',
          content:
            'Sneakers are conformable but this is may be not best product for me',
          username: 'JoshAllen',
        },
        {
          userId: '5',
          productId: '6',
          rating: '5',
          content: 'I brought this to my kid and OMG he love this watch',
          username: 'ArronRogers',
        },
        {
          userId: '2',
          productId: '6',
          rating: '5',
          content: 'My kid love his watch',
          username: 'JoshAllen',
        },
        {
          userId: '3',
          productId: '7',
          rating: '3',
          content: 'Only for 10 dollar not bad..',
          username: 'TomBrady',
        },
        {
          userId: '2',
          productId: '8',
          rating: '5',
          content: 'My kid love his waterproof watch',
          username: 'JoshAllen',
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
