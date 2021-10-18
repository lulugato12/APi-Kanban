const {DataTypes} = require('sequelize');
const {conect_db, close_db} = require('../helpers/server')

const sequelize = conect_db();

const Role = sequelize.define('Role', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {});

sequelize.close_db();

module.exports = {
  Role
}
