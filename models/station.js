/**
 * @module station
 * @require drawer
 * @require user
 * PostgreSQL table: station
 */

const {DataTypes, Deferrable} = require('sequelize');
const {conect_db, close_db} = require('../helpers/server');
const {Drawer} = require('./drawer');
const {User} = require('./user');

const sequelize = conect_db();

/**
 * Definition of the parameters of the station model.
 */
const Station = sequelize.define('station', {
  station_id: {
    type: DataTypes.INTEGER,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: 'user_id',
      deferrable: Deferrable.INITIALLY_IMMEDIATE
    }
  },
  input_drawer_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Drawer,
      key: 'drawer_id',
      deferrable: Deferrable.INITIALLY_IMMEDIATE
    }
  },
  output_drawer_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Drawer,
      key: 'drawer_id',
      deferrable: Deferrable.INITIALLY_IMMEDIATE
    }
  }
}, {freezeTableName: true});

module.exports = {
  Station
}
