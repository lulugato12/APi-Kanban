const {DataTypes} = require('sequelize');
const {conect_db, close_db} = require('../helpers/server')
const {Comment} = require('../models/comment')

function getComments(req, res){
  console.log('Getting all comments...');
  Comment.findAll()
  .then((roles) => res.status(200).send(roles), (err) => res.status(500).send(err))
}

function getCommentById(req, res){
  const {id} = req.params
  console.log(`Getting comment ${id}...`)
  Comment.findByPk(id)
  .then((role) => res.status(200).send(role), (err) => res.status(500).send(err))

}

module.exports = {
  getComments,
  getCommentById
}
