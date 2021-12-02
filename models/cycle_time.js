/**
 * @module cycle_time
 * @require station
 * @require run
 * PostgreSQL table: cycle_time
 */

const {DataTypes, Deferrable} = require('sequelize')
const {conect_db, close_db} = require('../helpers/server')
const {Station} = require('./station')
const {Run} = require('./run')

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
  },
  run_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Run,
      key: 'run_id',
      deferrable: Deferrable.INITIALLY_IMMEDIATE
    }
  }
}, {freezeTableName: true})

module.exports = {
  CycleTime
}
