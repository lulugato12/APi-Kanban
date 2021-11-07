/**
 * @module user
 * @require role
 * PostgreSQL table: user_kanban
 */

const {DataTypes, Deferrable} = require('sequelize')
const {conect_db, close_db} = require('../helpers/server')
const {Role} = require('./role')

const sequelize = conect_db();

/**
 * Definition of the parameters of the user model.
 */
const User = sequelize.define('user_kanban', {
  user_id: {
    type: DataTypes.INTEGER,
    primaryKey: true
  },
  first_name: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  last_name: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  id_telegram: {
    type: DataTypes.STRING(50)
  },
  major: {
    type: DataTypes.STRING(50)
  },
  class: {
    type: DataTypes.STRING(50),
  },
  email: {
    type: DataTypes.STRING(20)
  },
  role_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Role,
      key: 'role_id',
      deferrable: Deferrable.INITIALLY_IMMEDIATE
    }
  }
}, {freezeTableName: true})

module.exports = {
  User
}
