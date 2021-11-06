const {DataTypes} = require('sequelize');
const {conect_db, close_db} = require('../helpers/server')
const {Run} = require('../models/run')

function getRuns(req, res){
  console.log('Getting all run...');
  Run.findAll()
  .then((roles) => res.status(200).send(roles), (err) => res.status(500).send(err))
}

function getRunById(req, res){
  const {id} = req.params
  console.log(`Getting run ${id}...`)
  Run.findByPk(id)
  .then((role) => res.status(200).send(role), (err) => res.status(500).send(err))
}

module.exports = {
  getRuns,
  getRunById
}
