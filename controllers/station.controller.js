/**
 * @module station.controller
 * @version 1.0
 * @author Lourdes B. Cajica
 * PostgreSQL table: station
 */

const {Station} = require('../models/station')

/**
 * Return all the stations from the database.
 * @return {array} array that contains the jsons of each station.
 * @require station
 */
function getStations(req, res){
  console.log('Getting all station...');
  Station.findAll()
  .then((stations) => res.status(200).send(stations), (err) => res.status(500).send(err))
}

/**
 * Return a specific station from the database.
 * @param {integer} id - the id of the station.
 * @return {json} the json of the station.
 * @require station
 */
function getStationById(req, res){
  const {id} = req.params
  console.log(`Getting station ${id}...`)
  Station.findByPk(id)
  .then((station) => res.status(200).send(station), (err) => res.status(500).send(err))
}

/**
 * Create a station.
 * @param {json} body - json with the following structure: {"name": string, "user_id": integer, "input_drawer_id": integer, *["output_drawer_id": integer]}.
 * @return {integer} id of the new station.
 * @require station
 */
function createStation(req, res){
  console.log(`Creating station with data: ${JSON.stringify(req.body)}...`)
  Station.create(req.body, {"fields": Object.keys(req.body)})
  .then((id) => res.status(201).send(id), (err) => res.status(500).send(err))
}

/**
 * Update the given attributes of a station.
 * @param {integer} id - the id of the station to be updated.
 * @param {json} body - json with at least one of the following attributes: {"name": string, "user_id": integer, "input_drawer_id": integer, "output_drawer_id": integer}.
 * @return {integer} number of rows affected.
 * @require station
 */
function updateStation(req, res){
  const {id} = req.params
  console.log(`Creating station ${id} with data: ${JSON.stringify(req.body)}...`)
  Station.update(req.body, {
    "where": {"station_id" : id},
    "fields": Object.keys(req.body)
  })
  .then((rows) => res.status(200).send(rows), (err) => res.status(500).send(err))
}

/**
 * Detele a specific station from the database.
 * @param {integer} id - the id of the station.
 * @require station
 */
function deleteStation(req, res){
  const {id} = req.params
  console.log(`Deleting station ${id}...`)
  Station.destroy({
    "where": {"station_id" : id}
  })
  .then(() => res.sendStatus(200), (err) => res.status(500).send(err))
}

module.exports = {
  getStations,
  getStationById,
  createStation,
  updateStation,
  deleteStation
}
