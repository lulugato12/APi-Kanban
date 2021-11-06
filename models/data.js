const {DataTypes, Deferrable} = require('sequelize');
const {conect_db, close_db} = require('../helpers/server');
const {Run} = require('./run');
const {Drawer} = require('./drawer');

const sequelize = conect_db();

const Data = sequelize.define('data', {
  data_id: {
    type: DataTypes.INTEGER,
    primaryKey: true
  },
  value: {
    type: DataTypes.DECIMAL(5, 2),
    allowNull: false
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
  drawer_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Drawer,
      key: 'drawer_id',
      deferrable: Deferrable.INITIALLY_IMMEDIATE
    }
  }
}, {freezeTableName: true});

module.exports = {
  Data
}
