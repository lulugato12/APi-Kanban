/**
 * @module cycle_time
 * @require station
 * PostgreSQL table: cycle_time
 */

const {DataTypes, Deferrable} = require('sequelize')
const {conect_db, close_db} = require('../helpers/server')
const {Station} = require('./station')

const sequelize = conect_db()

/**
 * Definition of the parameters of the cycle_time model.
 */
const CycleTime = sequelize.define('cycle_time', {
  cycle_time_id: {
    type: DataTypes.INTEGER,
    primaryKey: true
  },
  station_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Station,
      key: 'station_id',
      deferrable: Deferrable.INITIALLY_IMMEDIATE
    }
  },
  total: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  }
}, {freezeTableName: true})

module.exports = {
  CycleTime
}
