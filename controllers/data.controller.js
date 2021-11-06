const {DataTypes} = require('sequelize');
const {conect_db, close_db} = require('../helpers/server')
const {Data} = require('../models/data')

function getDatas(req, res){
  console.log('Getting all data...');
  Data.findAll()
  .then((roles) => res.status(200).send(roles), (err) => res.status(500).send(err))
}

function getDataById(req, res){
  const {id} = req.params
  console.log(`Getting data ${id}...`)
  Data.findByPk(id)
  .then((role) => res.status(200).send(role), (err) => res.status(500).send(err))
}

module.exports = {
  getDatas,
  getDataById
}
