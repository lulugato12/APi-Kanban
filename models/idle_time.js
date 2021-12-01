/**
 * @module idle_time
 * @require station
 * PostgreSQL table: idle_time
 */

const {DataTypes, Deferrable} = require('sequelize')
const {conect_db, close_db} = require('../helpers/server')
const {Station} = require('./station')

const sequelize = conect_db()

/**
 * Definition of the parameters of the idle_time model.
 */
const IdleTime = sequelize.define('idle_time', {
  idle_time_id: {
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
  IdleTime
}
