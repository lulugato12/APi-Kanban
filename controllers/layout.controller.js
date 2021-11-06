const {DataTypes} = require('sequelize');
const {conect_db, close_db} = require('../helpers/server')
const {Layout} = require('../models/layout')

function getLayout(req, res){
  console.log('Getting all layout...');
  Layout.findAll()
  .then((roles) => res.status(200).send(roles), (err) => res.status(500).send(err))
}

function getLayoutById(req, res){
  const {id} = req.params
  console.log(`Getting layout ${id}...`)
  Layout.findByPk(id)
  .then((role) => res.status(200).send(role), (err) => res.status(500).send(err))

}

module.exports = {
  getLayout,
  getLayoutById
}
