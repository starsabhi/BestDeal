'use strict';
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define(
    'Product',
    {
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
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      productInfo: DataTypes.TEXT,
      category: DataTypes.STRING(20),
    },
    {}
  );
  Product.associate = function (models) {
    // associations can be defined here
    Product.hasMany(models.Review, { foreignKey: 'productId' });
    Product.hasMany(models.OrderCart, { foreignKey: 'productId' });
  };
  return Product;
};
