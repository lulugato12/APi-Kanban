/**
 * @module kanban
 * PostgreSQL table: kanban
 */

const {DataTypes} = require('sequelize');
const {conect_db, close_db} = require('../helpers/server');

const sequelize = conect_db();

/**
 * Definition of the parameters of the kanban model.
 */
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
