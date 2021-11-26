'use strict';
const db = require("../models");
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Livre extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    
    static associate(models) {
      Livre.belongsTo(models.Genre, { foreignKey: 'genreId', as: 'genre' })
    }
  };
  Livre.init({
    title: {
      allowNull: false,
      type: DataTypes.STRING
    },
    author: {
      allowNull: false,
      type: DataTypes.STRING
    },
    image: {
      allowNull: false,
      type: DataTypes.STRING
    },
    description: {
      allowNull: false,
      type: DataTypes.TEXT
    },
    genreId: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
  }, {
    sequelize,
    modelName: 'Livre',
  });
  return Livre;
};