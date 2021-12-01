/**
 * @module lead_time
 * @require run
 * PostgreSQL table: lead_time
 */

const {DataTypes, Deferrable} = require('sequelize')
const {conect_db, close_db} = require('../helpers/server')
const {Run} = require('./run')

const sequelize = conect_db()

/**
 * Definition of the parameters of the lead_time model.
 */
const LeadTime = sequelize.define('lead_time', {
  lead_time_id: {
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
  LeadTime
}
