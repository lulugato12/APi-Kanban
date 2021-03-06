/**
 * @module run.controller
 * @version 1.0
 * @author Lourdes B. Cajica
 * PostgreSQL table: run
 */

const {Run} = require('../models/run')

/**
 * Return all the runs from the database.
 * @return {array} array that contains the jsons of each run.
 * @require run
 */
function getRuns(req, res){
  console.log('Getting all run...');
  Run.findAll()
  .then((runs) => res.status(200).send(runs), (err) => res.status(500).send(err))
}

/**
 * Return a specific run from the database.
 * @param {integer} id - the id of the run.
 * @return {json} the json of the run.
 * @require run
 */
function getRunById(req, res){
  const {id} = req.params
  console.log(`Getting run ${id}...`)
  Run.findByPk(id)
  .then((run) => res.status(200).send(run), (err) => res.status(500).send(err))
}

/**
 * Create a run.
 * @param {json} body - json with the following structure: {"layout_id": integer, *["started": timestamp, "finished": timestamp, "pause_time": float]}.
 * @return {integer} id of the new run.
 * @require run
 */
function createRun(req, res){
  console.log(`Creating run with data: ${JSON.stringify(req.body)}...`)
  Run.create(req.body, {"fields":  Object.keys(req.body)})
  .then((id) => res.status(201).send(id), (err) => res.status(500).send(err))
}

/**
 * Update the given attributes of a run.
 * @param {integer} id - the id of the run to be updated.
 * @param {json} body - json with at least one of the following attributes: {"layout_id": integer, "started": timestamp, "finished": timestamp, "pause_time": float}.
 * @return {integer} number of rows affected.
 * @require run
 */
function updateRun(req, res){
  const {id} = req.params
  console.log(`Updating run ${id} with data: ${JSON.stringify(req.body)}...`)
  Run.update(req.body, {
    "where": {"run_id" : id},
    "fields": Object.keys(req.body)
  })
  .then((rows) => res.status(200).send(rows), (err) => res.status(500).send(err))
}

/**
 * Detele a specific run from the database.
 * @param {integer} id - the id of the run.
 * @require run
 */
function deleteRun(req, res){
  const {id} = req.params
  console.log(`Deleting run ${id}...`)
  Run.destroy({
    "where": {"run_id" : id}
  })
  .then(() => res.sendStatus(200), (err) => res.status(500).send(err))
}

module.exports = {
  getRuns,
  getRunById,
  createRun,
  updateRun,
  deleteRun
}
