const {DataTypes, Deferrable} = require('sequelize');
const {conect_db, close_db} = require('../helpers/server');
const {Comment} = require('./comment');
const {Run} = require('./run');

const sequelize = conect_db();

const Comment_Run = sequelize.define('comment_run', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true
  },
  comment_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Comment,
      key: 'comment_id',
      deferrable: Deferrable.INITIALLY_IMMEDIATE
    }
  },
  run_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Run,
      key: 'run_id',
      deferrable: Deferrable.INITIALLY_IMMEDIATE
    }
  }
}, {freezeTableName: true});

module.exports = {
  Comment_Run
}
