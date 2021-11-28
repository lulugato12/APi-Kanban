/**
 * @module layout.controller
 * @version 1.0
 * @author Lourdes B. Cajica
 * PostgreSQL table: layout
 */

const {Layout} = require('../models/layout')

/**
 * Return all the layouts from the database.
 * @return {array} array that contains the jsons of each layout.
 * @require layout
 */
function getLayouts(req, res){
  console.log('Getting all layout...');
  Layout.findAll()
  .then((layouts) => res.status(200).send(layouts), (err) => res.status(500).send(err))
}

/**
 * Return a specific layout from the database.
 * @param {integer} id - the id of the layout.
 * @return {json} the json of the layout.
 * @require layout
 */
function getLayoutById(req, res){
  const {id} = req.params
  console.log(`Getting layout ${id}...`)
  Layout.findByPk(id)
  .then((layout) => res.status(200).send(layout), (err) => res.status(500).send(err))
}



/**
 * Create a layout.
 * @param {json} body - json with the following structure: {"name": string, "user_id": integer}.
 * @return {integer} id of the new layout.
 * @require layout
 */
function createLayout(req, res){
  console.log(`Creating layout with data: ${JSON.stringify(req.body)}...`)
  Layout.create(req.body, {"fields": ["name", "user_id"]})
  .then((id) => res.status(201).send(id), (err) => res.status(500).send(err))
}

/**
 * Update the given attributes of a layout.
 * @param {integer} id - the id of the layout to be updated.
 * @param {json} body - json with at least one of the following attributes: {"name": string, "user_id": integer}.
 * @return {integer} number of rows affected.
 * @require layout
 */
function updateLayout(req, res){
  const {id} = req.params
  console.log(`Creating layout ${id} with data: ${JSON.stringify(req.body)}...`)
  Layout.update(req.body, {
    "where": {"layout_id" : id},
    "fields": Object.keys(req.body)
  })
  .then((rows) => res.status(200).send(rows), (err) => res.status(500).send(err))
}

/**
 * Detele a specific layout from the database.
 * @param {integer} id - the id of the layout.
 * @require layout
 */
function deleteLayout(req, res){
  const {id} = req.params
  console.log(`Deleting layout ${id}...`)
  Layout.destroy({
    "where": {"layout_id" : id}
  })
  .then(() => res.sendStatus(200), (err) => res.status(500).send(err))
}

module.exports = {
  getLayouts,
  getLayoutById,
  createLayout,
  updateLayout,
  deleteLayout
}
