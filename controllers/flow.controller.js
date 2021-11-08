/**
 * @module flow.controller
 * @version 1.0
 * @author Lourdes B. Cajica
 * PostgreSQL table: flow
 */

const {Flow} = require('../models/flow')

/**
 * Return all the flows from the database.
 * @return {array} array that contains the jsons of each flow.
 * @require flow
 */
function getFlows(req, res){
  console.log('Getting all flow...');
  Flow.findAll()
  .then((flows) => res.status(200).send(flows), (err) => res.status(500).send(err))
}

/**
 * Return a specific flow from the database.
 * @param {integer} id - the id of the flow.
 * @return {json} the json of the flow.
 * @require flow
 */
function getFlowById(req, res){
  const {id} = req.params
  console.log(`Getting flow ${id}...`)
  Flow.findByPk(id)
  .then((flow) => res.status(200).send(flow), (err) => res.status(500).send(err))
}

/**
 * Create a flow.
 * @param {json} body - json with the following structure: {"first_id": integer, "layout_id": integer, *["second_id": integer]}.
 * @return {integer} id of the new flow.
 * @require flow
 */
function createFlow(req, res){
  console.log(`Creating flow with data: ${JSON.stringify(req.body)}...`)
  Flow.create(req.body, {"fields": Object.keys(req.body)})
  .then((id) => res.status(201).send(id), (err) => res.status(500).send(err))
}

/**
 * Detele a specific flow from the database.
 * @param {integer} id - the id of the flow.
 * @require flow
 */
function deleteFlow(req, res){
  const {id} = req.params
  console.log(`Deleting flow ${id}...`)
  Flow.destroy({
    "where": {"flow_id" : id}
  })
  .then(() => res.sendStatus(200), (err) => res.status(500).send(err))
}

module.exports = {
  getFlows,
  getFlowById,
  createFlow,
  deleteFlow
}
