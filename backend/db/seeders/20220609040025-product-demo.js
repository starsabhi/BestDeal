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
          price: '10.50',
          imageUrl: 'https://m.media-amazon.com/images/I/31V7R+fPOfL._AC_.jpg',
          description:
            'Everyday made better: we listen to customer feedback and fine-tune every detail to ensure quality, fit, and comfort',
          productInfo:
            'This weekend-perfect casual button-front shirt in a midweight flannel is a go-to pick when the temperature drops',
          category: 'cloths',
        },
        {
          name: "lannel Shirt for Men Long Sleeve Men's Casual Button-Down Shirt 100%",
          price: '12.99',
          imageUrl:
            'https://m.media-amazon.com/images/I/81awHbAIt8L._AC_UX569_.jpg',
          description:
            'Everyday made better: we listen to customer feedback and fine-tune every detail to ensure quality, fit, and comfort',
          productInfo:
            'This weekend-perfect casual button-front shirt in a midweight flannel is a go-to pick when the temperature drops',
          category: 'cloths',
        },
        {
          name: 'COKAFIL Mens Running Shoes Athletic Walking Blade Tennis Shoes Fashion Sneakers',
          price: '20.99',
          imageUrl:
            'https://m.media-amazon.com/images/I/81jqgBux10L._AC_UY575_.jpg',
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
            'https://m.media-amazon.com/images/I/91brb-aPV6L._AC_UX522_.jpg',
          description:
            'Everyday made better: we listen to customer feedback and fine-tune every detail to ensure quality, fit, and comfort',
          productInfo:
            'This weekend-perfect casual button-front shirt in a midweight flannel is a go-to pick when the temperature drops',
          category: 'cloths',
        },
        {
          name: "Men's Walking Shoes Sneakers Breathable Mesh Upper Casual",
          price: '20.00',
          imageUrl:
            'https://m.media-amazon.com/images/I/71-LdwoPhfL._AC_UY575_.jpg',
          description:
            'Everyday made better: we listen to customer feedback and fine-tune every detail to ensure quality, fit, and comfort',
          productInfo:
            'This weekend-perfect casual button-front shirt in a midweight flannel is a go-to pick when the temperature drops',
          category: 'cloths',
        },
        {
          name: 'Kids Watch,Boys Watch for 3-15 Year Old Boys',
          price: '10.00',
          imageUrl:
            'https://m.media-amazon.com/images/I/61IcMWPWFDL._AC_UX679_.jpg',
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
            'https://m.media-amazon.com/images/I/91sj7LGZifL._AC_SX522._SX._UX._SY._UY_.jpg',
          description:
            'Everyday made better: we listen to customer feedback and fine-tune every detail to ensure quality, fit, and comfort',
          productInfo:
            'This weekend-perfect casual button-front shirt in a midweight flannel is a go-to pick when the temperature drops',
          category: 'cloths',
        },
        {
          name: 'Boys Camouflage LED Sports Kids Watch Waterproof Digital Electronic',
          price: '15.00',
          imageUrl:
            'https://m.media-amazon.com/images/I/71EQDHXpjoL._AC_UX679_.jpg',
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
