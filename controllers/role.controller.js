/**
 * @module role.controller
 * @version 1.0
 * @author Lourdes B. Cajica
 * PostgreSQL table: role
 */

const {Role} = require('../models/role')

/**
 * Return all the roles from the database.
 * @return {array} - array that contains the jsons of each role.
 * @require role
 */
function getRoles(req, res){
  console.log('Getting all roles...')
  Role.findAll()
  .then((roles) => res.status(200).send(roles), (err) => res.status(500).send(err))
}

/**
 * Return an specific role from the database.
 * @param {integer} id - the id of the role.
 * @return {json} - the json of the role.
 * @require role
 */
function getRoleById(req, res){
  const {id} = req.params
  console.log(`Getting role ${id}...`)
  Role.findByPk(id)
  .then((role) => res.status(200).send(role), (err) => res.status(500).send(err))
}

/**
 * Create a role.
 * @param {json} body - json with the following structure: {"name": string}.
 * @return {integer} - id of the new role.
 * @require role
 */
function createRole(req, res){
  console.log(`Creating role with data: ${JSON.stringify(req.body)}...`)
  Role.create(req.body, {"fields": ["name"]})
  .then((id) => res.status(201).send(id), (err) => res.status(500).send(err))
}

/**
 * Detele an specific role from the database.
 * @param {integer} id - the id of the role.
 * @require role
 */
function deleteRole(req, res){
  const {id} = req.params
  console.log(`Deleting role ${id}...`)
  Role.destroy({
    where: {"role_id" : id}
  })
  .then(() => res.sendStatus(200), (err) => res.status(500).send(err))
}

module.exports = {
  getRoles,
  getRoleById,
  createRole,
  deleteRole
}
