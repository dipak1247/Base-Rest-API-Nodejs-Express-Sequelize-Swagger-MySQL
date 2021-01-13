'use strict';

module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define('Books', {
    name    : {
      type: DataTypes.STRING,
      allowNull : false
    },
    title : {
      type: DataTypes.STRING,
      allowNull : false
    },
    price    : {
      type     : DataTypes.INTEGER,
      allowNull : false
    }
  });

  return model;
};
