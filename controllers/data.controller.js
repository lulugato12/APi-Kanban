/**
 * @module data.controller
 * @version 1.0
 * @author Lourdes B. Cajica
 * PostgreSQL table: data
 */

const {Data} = require('../models/data')

/**
 * Return all the data from the database.
 * @return {array} array that contains the jsons of each data.
 * @require data
 */
function getData(req, res){
  console.log('Getting all data...');
  Data.findAll()
  .then((data) => res.status(200).send(data), (err) => res.status(500).send(err))
}

/**
 * Return a specific data from the database.
 * @param {integer} id - the id of the data.
 * @return {json} the json of the data.
 * @require data
 */
function getDataById(req, res){
  const {id} = req.params
  console.log(`Getting data ${id}...`)
  Data.findByPk(id)
  .then((data) => res.status(200).send(data), (err) => res.status(500).send(err))
}

module.exports = {
  getData,
  getDataById
}
