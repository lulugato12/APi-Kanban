/**
 * @module lead_time.controller
 * @version 1.0
 * @author Lourdes B. Cajica
 * PostgreSQL table: lead_time
 */

const {LeadTime} = require('../models/lead_time');

/**
 * Return all the lead time instances from the database.
 * @return {array} array that contains the jsons of each lead time.
 * @require lead_time
 */
function getLeadTimes(req, res){
  console.log('Getting all lead times...');
  LeadTime.findAll()
  .then((leads) => res.status(200).send(leads), (err) => res.status(500).send(err))
}

/**
 * Return an specific lead time instance from the database.
 * @param {integer} id - the id of the lead time.
 * @return {json} the json of the lead time.
 * @require lead_time
 */
function getLeadTimeById(req, res){
  const {id} = req.params
  console.log(`Getting lead time ${id}...`)
  LeadTime.findByPk(id)
  .then((lead) => res.status(200).send(lead), (err) => res.status(500).send(err))
}

/**
 * Create a lead time instance.
 * @param {json} body - json with the following structure: {"run_id": integer, "total": float}.
 * @return {integer} id of the new lead time.
 * @require lead_time
 */
function createLeadTime(req, res){
  console.log(`Creating lead time with data: ${JSON.stringify(req.body)}...`)
  LeadTime.create(req.body, {"fields": ["run_id", "total"]})
  .then((id) => res.status(201).send(id), (err) => res.status(500).send(err))
}

module.exports = {
  getLeadTimes,
  getLeadTimeById,
  createLeadTime
}
