/**
 * @module transport_time.controller
 * @version 1.0
 * @author Lourdes B. Cajica
 * PostgreSQL table: transport_time
 */

const {TransportTime} = require('../models/transport_time');

/**
 * Return all the transport time instances from the database.
 * @return {array} array that contains the jsons of each transport time.
 * @require transport_time
 */
function getTransportTimes(req, res){
  console.log('Getting all transport times...');
  TransportTime.findAll()
  .then((transports) => res.status(200).send(transports), (err) => res.status(500).send(err))
}

/**
 * Return an specific transport time instance from the database.
 * @param {integer} id - the id of the transport time.
 * @return {json} the json of the transport time.
 * @require transport_time
 */
function getTransportTimeById(req, res){
  const {id} = req.params
  console.log(`Getting transport time ${id}...`)
  TransportTime.findByPk(id)
  .then((transport) => res.status(200).send(transport), (err) => res.status(500).send(err))
}

/**
 * Create a transport time instance.
 * @param {json} body - json with the following structure: {"station_id": integer, "total": float}.
 * @return {integer} id of the new transport time.
 * @require transport_time
 */
function createTransportTime(req, res){
  console.log(`Creating transport time with data: ${JSON.stringify(req.body)}...`)
  TransportTime.create(req.body, {"fields": ["station_id", "total"]})
  .then((id) => res.status(201).send(id), (err) => res.status(500).send(err))
}

module.exports = {
  getTransportTimes,
  getTransportTimeById,
  createTransportTime
}
