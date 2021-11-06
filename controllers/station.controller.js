const {DataTypes} = require('sequelize');
const {conect_db, close_db} = require('../helpers/server')
const {Station} = require('../models/station')

function getStations(req, res){
  console.log('Getting all station...');
  Station.findAll()
  .then((roles) => res.status(200).send(roles), (err) => res.status(500).send(err))
}

function getStationById(req, res){
  const {id} = req.params
  console.log(`Getting station ${id}...`)
  Station.findByPk(id)
  .then((role) => res.status(200).send(role), (err) => res.status(500).send(err))

}

module.exports = {
  getStations,
  getStationById
}
