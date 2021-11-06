const {DataTypes} = require('sequelize');
const {conect_db, close_db} = require('../helpers/server')

const sequelize = conect_db();

const Role = sequelize.define('role', {
  role_id: {
    type: DataTypes.INTEGER,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {freezeTableName: true});

module.exports = {
  Role
}
