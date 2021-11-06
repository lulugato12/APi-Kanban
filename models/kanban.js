const {DataTypes} = require('sequelize');
const {conect_db, close_db} = require('../helpers/server')

const sequelize = conect_db();

const Kanban = sequelize.define('kanban', {
  kanban_id: {
    type: DataTypes.INTEGER,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING(80),
    allowNull: false
  }
}, {freezeTableName: true});

module.exports = {
  Kanban
}
