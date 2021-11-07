/**
 * @module layout
 * @require user
 * PostgreSQL table: layout
 */

const {DataTypes, Deferrable} = require('sequelize')
const {conect_db, close_db} = require('../helpers/server')
const {User} = require('./user')

const sequelize = conect_db()

/**
 * Definition of the parameters of the layout model.
 */
const Layout = sequelize.define('layout', {
  layout_id: {
    type: DataTypes.INTEGER,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING(80),
    allowNull: false
  },
  user_id:{
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: 'user_id',
      deferrable: Deferrable.INITIALLY_IMMEDIATE
    }
  }
}, {freezeTableName: true})

module.exports = {
  Layout
}
