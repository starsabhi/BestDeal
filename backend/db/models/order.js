'use strict';
module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define(
    'Order',
    {
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: { model: 'Users' },
      },
      totalPrice: {
        type: DataTypes.DECIMAL(20, 2),
        allowNull: false,
      },
    },
    {}
  );
  Order.associate = function (models) {
    // associations can be defined here
    Order.belongsTo(models.User, { foreignKey: 'userId' }),
      Order.hasMany(models.OrderCart, {
        foreignKey: 'orderId',
        onDelete: 'CASCADE',
        hooks: true,
      });
  };
  return Order;
};
