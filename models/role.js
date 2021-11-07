/**
 * @module role
 * @version 1.0
 * @author Lourdes B. Cajica
 * PostgreSQL table: role
 */

const {DataTypes} = require('sequelize')
const {conect_db, close_db} = require('../helpers/server')

const sequelize = conect_db()

/**
 * Definition of the parameters of the role model.
 */
const Role = sequelize.define('role', {
  role_id: {
    type: DataTypes.INTEGER,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING(80),
    allowNull: false
  }
}, {freezeTableName: true})

module.exports = {
  Role
}
