const {DataTypes} = require('sequelize');
const {conect_db, close_db} = require('../helpers/server')
const {Role} = require('../models/role')

function getRoles(req, res){
  console.log('Getting all roles...');
  Role.findAll()
  .then((roles) => res.status(200).send(roles), (err) => res.status(500).send(err))
}

function getRoleById(req, res){
  const {id} = req.body
  console.log(`Getting role ${id}...`)

  Role.findByPk(id)
  .then((role) => res.status(200).send(role), (err) => res.status(500).send(err))

}

module.exports = {
  getRoles,
  getRoleById
}
