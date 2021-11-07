/**
 * @module product
 * PostgreSQL table: product
 */

const {DataTypes} = require('sequelize');
const {conect_db, close_db} = require('../helpers/server');

const sequelize = conect_db();

/**
 * Definition of the parameters of the product model.
 */
const Product = sequelize.define('product', {
  product_id: {
    type: DataTypes.INTEGER,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING(80),
    allowNull: false
  },
  weight: {
    type: DataTypes.DECIMAL(5, 2),
    allowNull: false
  },
}, {freezeTableName: true});

module.exports = {
  Product
}
