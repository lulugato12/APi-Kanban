/**
 * @module user.controller
 * @version 1.0
 * @author Lourdes B. Cajica
 * PostgreSQL table: user
 */

const {User} = require('../models/user')

/**
 * Return all the users from the database.
 * @return {array} array that contains the jsons of each user.
 * @require user
 */
function getUsers(req, res){
  console.log('Getting all users...');
  User.findAll()
  .then((users) => res.status(200).send(users), (err) => res.status(500).send(err))
}

/**
 * Return a specific user from the database.
 * @param {integer} id - the id of the user.
 * @return {json} the json of the user.
 * @require user
 */
function getUserById(req, res){
  const {id} = req.params
  console.log(`Getting user ${id}...`)
  User.findByPk(id)
  .then((user) => res.status(200).send(user), (err) => res.status(500).send(err))
}

/**
 * Create a user.
 * @param {json} body - json with the following structure: {"first_name": string, "last_name": string, "role_id": integer, "email": string, *["id_telegram": string, "major": string, "class": string]}.
 * @return {integer} id of the new user.
 * @require user
 */
function createUser(req, res){
  console.log(`Creating user with data: ${JSON.stringify(req.body)}...`)
  User.create(req.body, {"fields": Object.keys(req.body)})
  .then((id) => res.status(201).send(id), (err) => res.status(500).send(err))
}

/**
 * Update the given attributes of a user.
 * @param {integer} id - the id of the user to be updated.
 * @param {json} body - json with at least one of the following attributes: {"first_name": string, "last_name": string, "role_id": integer, "id_telegram": string, "major": string, "class": string, "email": string}.
 * @return {integer} number of rows affected.
 * @require user
 */
function updateUser(req, res){
  const {id} = req.params
  console.log(`Creating user ${id} with data: ${JSON.stringify(req.body)}...`)
  User.update(req.body, {
    "where": {"user_id" : id},
    "fields": Object.keys(req.body)
  })
  .then((rows) => res.status(200).send(rows), (err) => res.status(500).send(err))
}

/**
 * Detele a specific user from the database.
 * @param {integer} id - the id of the user.
 * @require user
 */
function deleteUser(req, res){
  const {id} = req.params
  console.log(`Deleting user ${id}...`)
  User.destroy({
    "where": {"user_id" : id}
  })
  .then(() => res.sendStatus(200), (err) => res.status(500).send(err))
}

module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
}
