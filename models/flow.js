/**
 * @module flow
 * @require layout
 * @require station
 * PostgreSQL table: flow
 */

const {DataTypes, Deferrable} = require('sequelize')
const {conect_db, close_db} = require('../helpers/server')
const {Layout} = require('./layout')
const {Station} = require('./station')

const sequelize = conect_db()

/**
 * Definition of the parameters of the flow model.
 */
const Flow = sequelize.define('flow', {
  flow_id: {
    type: DataTypes.INTEGER,
    primaryKey: true
  },
  first_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Station,
      key: 'station_id',
      deferrable: Deferrable.INITIALLY_IMMEDIATE
    }
  },
  second_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Station,
      key: 'station_id',
      deferrable: Deferrable.INITIALLY_IMMEDIATE
    }
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
  Flow
}
