const Sequelize = require('sequelize');

module.exports = function(sequelize, DataTypes) {
  const User = sequelize.define('user', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    email: {
      type: Sequelize.STRING
    },
    address: {
      type: Sequelize.STRING
    },
    phone: {
      type: Sequelize.STRING,
      allowNull: false
    },
    online: {
      type: Sequelize.BOOLEAN,
      defaultValue: false
    }
  });
  return User;
};
