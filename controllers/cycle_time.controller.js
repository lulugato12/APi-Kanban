/**
 * @module cycle_time.controller
 * @version 1.0
 * @author Lourdes B. Cajica
 * PostgreSQL table: cycle_time
 */

const {CycleTime} = require('../models/cycle_time');

/**
 * Return all the cycle time instances from the database.
 * @return {array} array that contains the jsons of each cycle time.
 * @require cycle_time
 */
function getCycleTimes(req, res){
  console.log('Getting all cycle times...');
  CycleTime.findAll()
  .then((cycles) => res.status(200).send(cycles), (err) => res.status(500).send(err))
}

/**
 * Return an specific cycle time instance from the database.
 * @param {integer} id - the id of the cycle time.
 * @return {json} the json of the cycle time.
 * @require cycle_time
 */
function getCycleTimeById(req, res){
  const {id} = req.params
  console.log(`Getting cycle time ${id}...`)
  CycleTime.findByPk(id)
  .then((cycle) => res.status(200).send(cycle), (err) => res.status(500).send(err))
}

/**
 * Create a cycle time instance.
 * @param {json} body - json with the following structure: {"station_id": integer, "total": float}.
 * @return {integer} id of the new cycle time.
 * @require cycle_time
 */
function createCycleTime(req, res){
  console.log(`Creating cycle time with data: ${JSON.stringify(req.body)}...`)
  CycleTime.create(req.body, {"fields": ["station_id", "total"]})
  .then((id) => res.status(201).send(id), (err) => res.status(500).send(err))
}

module.exports = {
  getCycleTimes,
  getCycleTimeById,
  createCycleTime
}
