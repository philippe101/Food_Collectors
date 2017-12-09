const Sequelize = require('sequelize');

module.exports = function(sequelize, DataTypes) {
  const Status = sequelize.define('status', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false
    }
  }, {
    timestamps: false
  });
  return Status;
};
