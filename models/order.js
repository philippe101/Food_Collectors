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
      type: Sequelize.DATE,
      allowNull: false
    },
    status: {
      type: Sequelize.INTEGER,
      defaultValue: 1
    }
  });
  return Order;
};
