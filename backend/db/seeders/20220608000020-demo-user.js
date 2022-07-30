'use strict';
const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'Users',
      [
        {
          email: 'demo@user.io',
          username: 'Demo-user',
          hashedPassword: bcrypt.hashSync('password'),
        },
        {
          email: 'user1@user.io',
          username: 'JoshAllen',
          hashedPassword: bcrypt.hashSync('password2'),
        },
        {
          email: 'user2@user.io',
          username: 'TomBrady',
          hashedPassword: bcrypt.hashSync('password3'),
        },
        {
          email: 'enagold@user.io',
          username: 'Lenagold',
          hashedPassword: bcrypt.hashSync('password5'),
        },
        {
          email: 'ronRoge@user.io',
          username: 'ArronRogers',
          hashedPassword: bcrypt.hashSync('password5'),
        },
        {
          email: 'megan@user.io',
          username: 'MeganFox',
          hashedPassword: bcrypt.hashSync('password5'),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(
      'Users',
      {
        username: { [Op.in]: ['Demo-lition', 'FakeUser1', 'FakeUser2'] },
      },
      {}
    );
  },
};
