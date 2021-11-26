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
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    image: DataTypes.STRING,
    description: DataTypes.TEXT,
    genreId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Livre',
  });
  return Livre;
};