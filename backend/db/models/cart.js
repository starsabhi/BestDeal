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
      Cart.belongsTo(models.Product, { foreignKey: 'productId' })
  };
  return Cart;
};
