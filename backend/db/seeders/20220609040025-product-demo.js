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
          imageUrl: 'https://m.media-amazon.com/images/I/31V7R+fPOfL._AC_.jpg',
          description:
            'Everyday made better: we listen to customer feedback and fine-tune every detail to ensure quality, fit, and comfort',
          productInfo:
            'This weekend-perfect casual button-front shirt in a midweight flannel is a go-to pick when the temperature drops',
          category: 'cloths',
        },
        {
          name: "lannel Shirt for Men Long Sleeve Men's Casual Button-Down Shirt 100%",
          price: '12.00',
          imageUrl:
            'https://m.media-amazon.com/images/I/81awHbAIt8L._AC_UX569_.jpg',
          description:
            'Everyday made better: we listen to customer feedback and fine-tune every detail to ensure quality, fit, and comfort',
          productInfo:
            'This weekend-perfect casual button-front shirt in a midweight flannel is a go-to pick when the temperature drops',
          category: 'cloths',
        },
        {
          name: "Essentials Men's Regular-fit Long-Sleeve Flannel Shirt",
          price: '10.00',
          imageUrl: 'https://m.media-amazon.com/images/I/31V7R+fPOfL._AC_.jpg',
          description:
            'Everyday made better: we listen to customer feedback and fine-tune every detail to ensure quality, fit, and comfort',
          productInfo:
            'This weekend-perfect casual button-front shirt in a midweight flannel is a go-to pick when the temperature drops',
          category: 'cloths',
        },
        {
          name: "Essentials Men's Regular-fit Long-Sleeve Flannel Shirt",
          price: '10.00',
          imageUrl: 'https://m.media-amazon.com/images/I/31V7R+fPOfL._AC_.jpg',
          description:
            'Everyday made better: we listen to customer feedback and fine-tune every detail to ensure quality, fit, and comfort',
          productInfo:
            'This weekend-perfect casual button-front shirt in a midweight flannel is a go-to pick when the temperature drops',
          category: 'cloths',
        },
        {
          name: "Essentials Men's Regular-fit Long-Sleeve Flannel Shirt",
          price: '10.00',
          imageUrl: 'https://m.media-amazon.com/images/I/31V7R+fPOfL._AC_.jpg',
          description:
            'Everyday made better: we listen to customer feedback and fine-tune every detail to ensure quality, fit, and comfort',
          productInfo:
            'This weekend-perfect casual button-front shirt in a midweight flannel is a go-to pick when the temperature drops',
          category: 'cloths',
        },
        {
          name: "Essentials Men's Regular-fit Long-Sleeve Flannel Shirt",
          price: '10.00',
          imageUrl: 'https://m.media-amazon.com/images/I/31V7R+fPOfL._AC_.jpg',
          description:
            'Everyday made better: we listen to customer feedback and fine-tune every detail to ensure quality, fit, and comfort',
          productInfo:
            'This weekend-perfect casual button-front shirt in a midweight flannel is a go-to pick when the temperature drops',
          category: 'cloths',
        },
        {
          name: "Essentials Men's Regular-fit Long-Sleeve Flannel Shirt",
          price: '10.00',
          imageUrl: 'https://m.media-amazon.com/images/I/31V7R+fPOfL._AC_.jpg',
          description:
            'Everyday made better: we listen to customer feedback and fine-tune every detail to ensure quality, fit, and comfort',
          productInfo:
            'This weekend-perfect casual button-front shirt in a midweight flannel is a go-to pick when the temperature drops',
          category: 'cloths',
        },
        {
          name: "Essentials Men's Regular-fit Long-Sleeve Flannel Shirt",
          price: '10.00',
          imageUrl: 'https://m.media-amazon.com/images/I/31V7R+fPOfL._AC_.jpg',
          description:
            'Everyday made better: we listen to customer feedback and fine-tune every detail to ensure quality, fit, and comfort',
          productInfo:
            'This weekend-perfect casual button-front shirt in a midweight flannel is a go-to pick when the temperature drops',
          category: 'cloths',
        },
        {
          name: "Essentials Men's Regular-fit Long-Sleeve Flannel Shirt",
          price: '10.00',
          imageUrl: 'https://m.media-amazon.com/images/I/31V7R+fPOfL._AC_.jpg',
          description:
            'Everyday made better: we listen to customer feedback and fine-tune every detail to ensure quality, fit, and comfort',
          productInfo:
            'This weekend-perfect casual button-front shirt in a midweight flannel is a go-to pick when the temperature drops',
          category: 'cloths',
        },
        {
          name: "Essentials Men's Regular-fit Long-Sleeve Flannel Shirt",
          price: '10.00',
          imageUrl: 'https://m.media-amazon.com/images/I/31V7R+fPOfL._AC_.jpg',
          description:
            'Everyday made better: we listen to customer feedback and fine-tune every detail to ensure quality, fit, and comfort',
          productInfo:
            'This weekend-perfect casual button-front shirt in a midweight flannel is a go-to pick when the temperature drops',
          category: 'cloths',
        },
        {
          name: "Essentials Men's Regular-fit Long-Sleeve Flannel Shirt",
          price: '10.00',
          imageUrl: 'https://m.media-amazon.com/images/I/31V7R+fPOfL._AC_.jpg',
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
