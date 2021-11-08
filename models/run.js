/**
 * @module run
 * @require layout
 * PostgreSQL table: run
 */

const {DataTypes, Deferrable} = require('sequelize')
const {conect_db, close_db} = require('../helpers/server')
const {Layout} = require('./layout')

const sequelize = conect_db()

/**
 * Definition of the parameters of the run model.
 */
const Run = sequelize.define('run', {
  run_id: {
    type: DataTypes.INTEGER,
    primaryKey: true
  },
  layout_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Layout,
      key: 'layout_id',
      deferrable: Deferrable.INITIALLY_IMMEDIATE
    }
  }
}, {freezeTableName: true})

module.exports = {
  Run
}
