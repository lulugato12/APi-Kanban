const {DataTypes} = require('sequelize');
const {conect_db, close_db} = require('../helpers/server')
const {Comment_Run} = require('../models/comment_run')

function getComment_Run(req, res){
  console.log('Getting all comment_run...');
  Comment_Run.findAll()
  .then((roles) => res.status(200).send(roles), (err) => res.status(500).send(err))
}

function getComment_RunById(req, res){
  const {id} = req.params
  console.log(`Getting comment_run ${id}...`)
  Comment_Run.findByPk(id)
  .then((role) => res.status(200).send(role), (err) => res.status(500).send(err))

}

module.exports = {
  getComment_Run,
  getComment_RunById
}
