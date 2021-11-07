/**
 * @module comment
 * @require user
 * PostgreSQL table: comment
 */

const {DataTypes, Deferrable} = require('sequelize');
const {conect_db, close_db} = require('../helpers/server')
const {User} = require('./user')

const sequelize = conect_db();

/**
 * Definition of the parameters of the comment model.
 */
const Comment = sequelize.define('comment', {
  comment_id: {
    type: DataTypes.INTEGER,
    primaryKey: true
  },
  text: {
    type: DataTypes.STRING(500),
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
  }
}, {freezeTableName: true});

module.exports = {
  Comment
}
