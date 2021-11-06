const {DataTypes} = require('sequelize');
const {conect_db, close_db} = require('../helpers/server')
const {Drawer} = require('../models/drawer')

function getDrawers(req, res){
  console.log('Getting all drawer...');
  Drawer.findAll()
  .then((roles) => res.status(200).send(roles), (err) => res.status(500).send(err))
}

function getDrawerById(req, res){
  const {id} = req.params
  console.log(`Getting drawer ${id}...`)
  Drawer.findByPk(id)
  .then((role) => res.status(200).send(role), (err) => res.status(500).send(err))

}

module.exports = {
  getDrawers,
  getDrawerById
}
