const {DataTypes} = require('sequelize');
const {conect_db, close_db} = require('../helpers/server')
const {User} = require('../models/user')

function getUsers(req, res){
  console.log('Getting all users...');
  User.findAll()
  .then((roles) => res.status(200).send(roles), (err) => res.status(500).send(err))
}

function getUserById(req, res){
  const {id} = req.params
  console.log(`Getting user ${id}...`)
  User.findByPk(id)
  .then((role) => res.status(200).send(role), (err) => res.status(500).send(err))

}

module.exports = {
  getUsers,
  getUserById
}
