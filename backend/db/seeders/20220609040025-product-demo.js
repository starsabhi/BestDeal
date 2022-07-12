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
          category: 'Men',
        },
        {
          name: "Flannel Shirt for Men Long Sleeve Men's Casual Button-Down Shirt 100%",
          price: '12.99',
          imageUrl:
            'https://m.media-amazon.com/images/I/81awHbAIt8L._AC_UX569_.jpg',
          description:
            'Everyday made better: we listen to customer feedback and fine-tune every detail to ensure quality, fit, and comfort',
          productInfo:
            'This weekend-perfect casual button-front shirt in a midweight flannel is a go-to pick when the temperature drops',
          category: 'Men',
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
          category: 'Men',
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
          category: 'Men',
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
          category: 'Shoes',
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
          category: 'Kids',
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
        {
          name: 'Dubinik Mens Button Down Long Sleeve Shirts',
          price: '25.99',
          imageUrl:
            'https://m.media-amazon.com/images/I/81ogvaIw9kL._AC_UX569_.jpg',
          description:
            'Mens long sleeve plaid oxford shirt with a chest pocket on the left front can hold all your essentials. The material is lightweight, soft, breathable and wrinkle-resistant, keeps you comfortable throughout the day. The simple and low profile style makes the button-down shirts great for spring, fall and winter.',
          productInfo:
            'Mens long sleeve plaid oxford shirt with a chest pocket on the left front can hold all your essentials. The material is lightweight, soft, breathable and wrinkle-resistant, keeps you comfortable throughout the day. The simple and low profile style makes the button-down shirts great for spring, fall and winter.',
          category: 'cloths',
        },
        {
          name: 'Nxtrnd G1 Pro Football Gloves',
          price: '20.99',
          imageUrl:
            'https://m.media-amazon.com/images/I/61fKvSdeWlL._AC_SX522_.jpg',
          description:
            'Grip All Season - The silicone palm of the G1 football glove is infused with our NXT-Grip formula offering consistent stickiness throughout the entire season.',
          productInfo:
            'This weekend-perfect casual button-front shirt in a midweight flannel is a go-to pick when the temperature drops',
          category: 'Sports',
        },
        {
          name: "Hanes mens Hanes Men's Max Cushion Low Cut 6-pair Pack",
          price: '12.99',
          imageUrl:
            'https://m.media-amazon.com/images/I/81DwWivgT8S._AC_UX679_.jpg',
          description:
            'Max cushioning of the foot make these cushioned socks for men a sure bet for everyday wear, from work, play, gym, sports, and beyond.',
          productInfo:
            'This weekend-perfect casual button-front shirt in a midweight flannel is a go-to pick when the temperature drops',
          category: 'Men',
        },
        {
          name: 'Franklin Sports Junior Football - Grip-Rite 100',
          price: '9.99',
          imageUrl:
            'https://m.media-amazon.com/images/I/91c3Ca9UdiS._AC_SX522_.jpg',
          description:
            'These junior footballs are constructed from a durable, high-grip, deep-pebbled rubber that stands up to wear and tear on grass, concrete, or any other surface',
          productInfo:
            'This weekend-perfect casual button-front shirt in a midweight flannel is a go-to pick when the temperature drops',
          category: 'Sports',
        },
        {
          name: 'Osmo - Monster - Ages 5-10 - Bring Real-life Drawings ',
          price: '34.99',
          imageUrl:
            'https://m.media-amazon.com/images/I/81dMdPhpKzL._AC_SX522_.jpg',
          description: `Fun-filled & award winning learning games. Children interact with actual hand held pieces & an iPad or Fire Tablet, bringing a child's game pieces & actions to life`,
          productInfo:
            'This weekend-perfect casual button-front shirt in a midweight flannel is a go-to pick when the temperature drops',
          category: 'Kids',
        },
        {
          name: 'Best Choice Products Kids 12V Ride On Truck',
          price: '299.99',
          imageUrl:
            'https://m.media-amazon.com/images/I/71ZQ5cxaFuS._AC_SX522_.jpg',
          description:
            'Battery Powered Toy Car w/ Spring Suspension, Remote Control, 3 Speeds, LED Lights, Bluetooth - Pink',
          productInfo:
            'This weekend-perfect casual button-front shirt in a midweight flannel is a go-to pick when the temperature drops',
          category: 'Kids',
        },
        {
          name: 'Kidzone 12V Battery Powered Licensed Chevrolet',
          price: '299.99',
          imageUrl:
            'https://m.media-amazon.com/images/I/71hd3lyG5cS._AC_SX522_.jpg',
          description:
            'Battery Powered Toy Car w/ Spring Suspension, Remote Control, 3 Speeds, LED Lights, Bluetooth - Pink',
          productInfo:
            'This weekend-perfect casual button-front shirt in a midweight flannel is a go-to pick when the temperature drops',
          category: 'Kids',
        },
        {
          name: 'PlayShifu STEM Toys for Kids - Tacto Coding',
          price: '39.99',
          imageUrl:
            'https://m.media-amazon.com/images/I/71cfDa-RhrL._AC_SX522_.jpg',
          description:
            'layShifu helps early learners THINK code with exciting gameplay and bite-sized sequences. Did you know, it has been designed and created by coder parents?! Tacto makes coding fun and easy through interactions with VISUAL elements, NOT blocks of code!',
          productInfo:
            'This weekend-perfect casual button-front shirt in a midweight flannel is a go-to pick when the temperature drops',
          category: 'Kids',
        },
        {
          name: 'Pixicade Plus: Transform Creative Drawings to Animated',
          price: '27.99',
          imageUrl:
            'https://m.media-amazon.com/images/I/91cqy7zldrL._AC_SX522_.jpg',
          description:
            'Kids and teens use colored markers and paper to turn hand drawings into instantly playable video games! ',
          productInfo:
            'This weekend-perfect casual button-front shirt in a midweight flannel is a go-to pick when the temperature drops',
          category: 'Kids',
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
