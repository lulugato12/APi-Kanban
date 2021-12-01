/**
 * @module takt_time.controller
 * @version 1.0
 * @author Lourdes B. Cajica
 * PostgreSQL table: takt_time
 */

const {TaktTime} = require('../models/takt_time');

/**
 * Return all the takt time instances from the database.
 * @return {array} array that contains the jsons of each takt time.
 * @require takt_time
 */
function getTaktTimes(req, res){
  console.log('Getting all takt times...');
  TaktTime.findAll()
  .then((takts) => res.status(200).send(takts), (err) => res.status(500).send(err))
}

/**
 * Return an specific takt time instance from the database.
 * @param {integer} id - the id of the takt time.
 * @return {json} the json of the takt time.
 * @require takt_time
 */
function getTaktTimeById(req, res){
  const {id} = req.params
  console.log(`Getting takt time ${id}...`)
  TaktTime.findByPk(id)
  .then((takt) => res.status(200).send(takt), (err) => res.status(500).send(err))
}

/**
 * Create a takt time instance.
 * @param {json} body - json with the following structure: {"run_id": integer, "total": float}.
 * @return {integer} id of the new takt time.
 * @require takt_time
 */
function createTaktTime(req, res){
  console.log(`Creating takt time with data: ${JSON.stringify(req.body)}...`)
  TaktTime.create(req.body, {"fields": ["run_id", "total"]})
  .then((id) => res.status(201).send(id), (err) => res.status(500).send(err))
}

module.exports = {
  getTaktTimes,
  getTaktTimeById,
  createTaktTime
}
