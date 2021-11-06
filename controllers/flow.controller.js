const {DataTypes} = require('sequelize');
const {conect_db, close_db} = require('../helpers/server')
const {Flow} = require('../models/flow')

function getFlows(req, res){
  console.log('Getting all flow...');
  Flow.findAll()
  .then((roles) => res.status(200).send(roles), (err) => res.status(500).send(err))
}

function getFlowById(req, res){
  const {id} = req.params
  console.log(`Getting flow ${id}...`)
  Flow.findByPk(id)
  .then((role) => res.status(200).send(role), (err) => res.status(500).send(err))

}

module.exports = {
  getFlows,
  getFlowById
}
