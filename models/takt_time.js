/**
 * @module takt_time
 * @require run
 * PostgreSQL table: takt_time
 */

const {DataTypes, Deferrable} = require('sequelize')
const {conect_db, close_db} = require('../helpers/server')
const {Run} = require('./run')

const sequelize = conect_db()

/**
 * Definition of the parameters of the takt_time model.
 */
const TaktTime = sequelize.define('takt_time', {
  takt_time_id: {
    type: DataTypes.INTEGER,
    primaryKey: true
  },
  run_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Run,
      key: 'run_id',
      deferrable: Deferrable.INITIALLY_IMMEDIATE
    }
  },
  total: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  }
}, {freezeTableName: true})

module.exports = {
  TaktTime
}
