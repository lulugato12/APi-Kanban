/**
 * @module transport_time
 * @require station
 * PostgreSQL table: transport_time
 */

const {DataTypes, Deferrable} = require('sequelize')
const {conect_db, close_db} = require('../helpers/server')
const {Station} = require('./station')

const sequelize = conect_db()

/**
 * Definition of the parameters of the transport_time model.
 */
const TransportTime = sequelize.define('transport_time', {
  transport_time_id: {
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
  TransportTime
}
