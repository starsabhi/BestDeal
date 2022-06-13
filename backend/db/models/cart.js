'use strict';
module.exports = (sequelize, DataTypes) => {
  const Cart = sequelize.define(
    'Cart',
    {
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },

      productId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
      },
      price: {
        type: DataTypes.DECIMAL(20, 2),
        allowNull: false,
      },
      imageUrl: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {}
  );
  Cart.associate = function (models) {
    // associations can be defined here
    Cart.belongsTo(models.User, { foreignKey: 'userId' }),
      Cart.belongsTo(models.Product, { foreignKey: 'productId' });
  };
  return Cart;
};
