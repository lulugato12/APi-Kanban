/**
 * @module kanban.controller
 * @version 1.0
 * @author Lourdes B. Cajica
 * PostgreSQL table: kanban
 */

const {Kanban} = require('../models/kanban')

/**
 * Return all the kanbans from the database.
 * @return {array} array that contains the jsons of each kanban.
 * @require kanban
 */
function getKanbans(req, res){
  console.log('Getting all kanbans...');
  Kanban.findAll()
  .then((kanbans) => res.status(200).send(kanbans), (err) => res.status(500).send(err))
}

/**
 * Return an specific kanban from the database.
 * @param {integer} id - the id of the kanban.
 * @return {json} the json of the kanban.
 * @require kanban
 */
function getKanbanById(req, res){
  const {id} = req.params
  console.log(`Getting kanban ${id}...`)
  Kanban.findByPk(id)
  .then((kanban) => res.status(200).send(kanban), (err) => res.status(500).send(err))
}

/**
 * Create a kanban.
 * @param {json} body - json with the following structure: {"name": string}.
 * @return {integer} id of the new kanban.
 * @require kanban
 */
function createKanban(req, res){
  console.log(`Creating kanban with data: ${JSON.stringify(req.body)}...`)
  Kanban.create(req.body, {"fields": ["name"]})
  .then((id) => res.status(201).send(id), (err) => res.status(500).send(err))
}

/**
 * Update the given attributes of a kanban.
 * @param {integer} id - the id of the kanban to be updated.
 * @param {json} body - json with the following structure: {"name": string}.
 * @return {integer} number of rows affected.
 * @require kanban
 */
function updateKanban(req, res){
  const {id} = req.params
  console.log(`Creating kanban ${id} with data: ${JSON.stringify(req.body)}...`)
  Kanban.update(req.body, {
    "where": {"kanban_id" : id},
    "fields": ["name"]
  })
  .then((rows) => res.status(200).send(rows), (err) => res.status(500).send(err))
}

/**
 * Detele a specific kanban from the database.
 * @param {integer} id - the id of the kanban.
 * @require kanban
 */
function deleteKanban(req, res){
  const {id} = req.params
  console.log(`Deleting kanban ${id}...`)
  Kanban.destroy({
    "where": {"kanban_id" : id}
  })
  .then(() => res.sendStatus(200), (err) => res.status(500).send(err))
}

module.exports = {
  getKanbans,
  getKanbanById,
  createKanban,
  updateKanban,
  deleteKanban
}
