/**
 * @module drawer.controller
 * @version 1.0
 * @author Lourdes B. Cajica
 * PostgreSQL table: drawer
 */

const {Drawer} = require('../models/drawer')

/**
 * Return all the drawers from the database.
 * @return {array} array that contains the jsons of each drawers.
 * @require drawers
 */
function getDrawers(req, res){
  console.log('Getting all drawer...');
  Drawer.findAll()
  .then((drawers) => res.status(200).send(drawers), (err) => res.status(500).send(err))
}

/**
 * Return a specific drawer from the database.
 * @param {integer} id - the id of the drawer.
 * @return {json} the json of the drawer.
 * @require drawer
 */
function getDrawerById(req, res){
  const {id} = req.params
  console.log(`Getting drawer ${id}...`)
  Drawer.findByPk(id)
  .then((drawer) => res.status(200).send(drawer), (err) => res.status(500).send(err))
}

/**
 * Create a drawer.
 * @param {json} body - json with the following structure: {"product_id": integer, "capacity": float, "kanban_id": integer, *["counter": integer]}.
 * @return {integer} id of the new drawer.
 * @require drawer
 */
function createDrawer(req, res){
  console.log(`Creating drawer with data: ${JSON.stringify(req.body)}...`)
  Drawer.create(req.body, {"fields": Object.keys(req.body)})
  .then((id) => res.status(201).send(id), (err) => res.status(500).send(err))
}

/**
 * Update the given attributes of a drawer.
 * @param {integer} id - the id of the drawer to be updated.
 * @param {json} body - json with at least one of the following attributes: {"product_id": integer, "capacity": integer, "kanban_id": integer, "counter": integer}.
 * @return {integer} number of rows affected.
 * @require drawer
 */
function updateDrawer(req, res){
  const {id} = req.params
  console.log(`Updating drawer ${id} with data: ${JSON.stringify(req.body)}...`)
  Drawer.update(req.body, {
    "where": {"drawer_id" : id},
    "fields": Object.keys(req.body)
  })
  .then((rows) => res.status(200).send(rows), (err) => res.status(500).send(err))
}

/**
 * Detele a specific drawer from the database.
 * @param {integer} id - the id of the drawer.
 * @require drawer
 */
function deleteDrawer(req, res){
  const {id} = req.params
  console.log(`Deleting drawer ${id}...`)
  Drawer.destroy({
    "where": {"drawer_id" : id}
  })
  .then(() => res.sendStatus(200), (err) => res.status(500).send(err))
}

module.exports = {
  getDrawers,
  getDrawerById,
  createDrawer,
  updateDrawer,
  deleteDrawer
}
