/**
 * @module role.controller
 * PostgreSQL table: role
 */

const {DataTypes} = require('sequelize');
const {conect_db, close_db} = require('../helpers/server');
const {Role} = require('../models/role');

/**
 * Return all the roles from the database.
 * @return {array} - array that contains the jsons of each role.
 */
function getRoles(req, res){
  console.log('Getting all roles...');
  Role.findAll()
  .then((roles) => res.status(200).send(roles), (err) => res.status(500).send(err))
}

/**
 * Return an specific role from the database.
 * @param {integer} id - the id of the role.
 * @return {json} - the json of the role.
 */
function getRoleById(req, res){
  const {id} = req.params
  console.log(`Getting role ${id}...`)
  Role.findByPk(id)
  .then((role) => res.status(200).send(role), (err) => res.status(500).send(err))
}

/**
 * Create a role.
 * @param {string} name - the name of the new role.
 * @return {integer} - id of the new role.
 */
function createRole(req, res){
  Role.create(req.body, {"fields": ["name"]})
  .then((id) => res.status(201).send(id), (err) => res.status(500).send(err))
}

/**
 * Detele an specific role from the database.
 * @param {integer} id - the id of the role.
 */
function deleteRole(req, res){
  const {id} = req.params
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
