const Sequelize = require('sequelize');

module.exports = function(sequelize, DataTypes) {
  const Order = sequelize.define('order', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    quantity: {
      type: Sequelize.STRING,
      allowNull: false
    },
    expiration: {
      type: Sequelize.STRING,
      allowNull: false
    },
    address: {
      type: Sequelize.STRING,
      allowNull: false
    }
  });
  return Order;
};
