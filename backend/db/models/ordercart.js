'use strict';
module.exports = (sequelize, DataTypes) => {
  const OrderCart = sequelize.define(
    'OrderCart',
    {
      orderId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
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
  OrderCart.associate = function (models) {
    // associations can be defined here
    OrderCart.belongsTo(models.User, { foreignKey: 'userId' }),
      OrderCart.belongsTo(models.Product, { foreignKey: 'productId' }),
      OrderCart.belongsTo(models.Order, { foreignKey: 'orderId' });
  };
  return OrderCart;
};
