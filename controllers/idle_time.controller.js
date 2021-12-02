/**
 * @module idle_time.controller
 * @version 1.0
 * @author Lourdes B. Cajica
 * PostgreSQL table: idle_time
 */

const {IdleTime} = require('../models/idle_time');

/**
 * Return all the idle time instances from the database.
 * @return {array} array that contains the jsons of each idle time.
 * @require idle_time
 */
function getIdleTimes(req, res){
  console.log('Getting all idle times...');
  IdleTime.findAll()
  .then((idles) => res.status(200).send(idles), (err) => res.status(500).send(err))
}

/**
 * Return an specific idle time instance from the database.
 * @param {integer} id - the id of the idle time.
 * @return {json} the json of the idle time.
 * @require idle_time
 */
function getIdleTimeById(req, res){
  const {id} = req.params
  console.log(`Getting idle time ${id}...`)
  IdleTime.findByPk(id)
  .then((idle) => res.status(200).send(idle), (err) => res.status(500).send(err))
}

/**
 * Create an idle time instance.
 * @param {json} body - json with the following structure: {"station_id": integer, "total": float, "run_id": integer}.
 * @return {integer} id of the new idle time.
 * @require idle_time
 */
function createIdleTime(req, res){
  console.log(`Creating idle time with data: ${JSON.stringify(req.body)}...`)
  IdleTime.create(req.body, {"fields": ["station_id", "total", "run_id"]})
  .then((id) => res.status(201).send(id), (err) => res.status(500).send(err))
}

module.exports = {
  getIdleTimes,
  getIdleTimeById,
  createIdleTime
}
