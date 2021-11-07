/**
 * @module drawer
 * @require product
 * @require kanban
 * PostgreSQL table: drawer
 */

const {DataTypes, Deferrable} = require('sequelize')
const {conect_db, close_db} = require('../helpers/server')
const {Product} = require('./product')
const {Kanban} = require('./kanban')

const sequelize = conect_db()

/**
 * Definition of the parameters of the drawer model.
 */
const Drawer = sequelize.define('drawer', {
  drawer_id: {
    type: DataTypes.INTEGER,
    primaryKey: true
  },
  capacity: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  product_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Product,
      key: 'product_id',
      deferrable: Deferrable.INITIALLY_IMMEDIATE
    }
  },
  kanban_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Kanban,
      key: 'kanban_id',
      deferrable: Deferrable.INITIALLY_IMMEDIATE
    }
  }
}, {freezeTableName: true})

module.exports = {
  Drawer
}
