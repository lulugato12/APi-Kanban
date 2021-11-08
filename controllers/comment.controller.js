/**
 * @module comment.controller
 * @version 1.0
 * @author Lourdes B. Cajica
 * PostgreSQL table: comment
 */

const {Comment} = require('../models/comment')

/**
 * Return all the comments from the database.
 * @return {array} array that contains the jsons of each comment.
 * @require comment
 */
function getComments(req, res){
  console.log('Getting all comments...');
  Comment.findAll()
  .then((comments) => res.status(200).send(comments), (err) => res.status(500).send(err))
}

/**
 * Return a specific comment from the database.
 * @param {integer} id - the id of the comment.
 * @return {json} the json of the comment.
 * @require comment
 */
function getCommentById(req, res){
  const {id} = req.params
  console.log(`Getting comment ${id}...`)
  Comment.findByPk(id)
  .then((comment) => res.status(200).send(comment), (err) => res.status(500).send(err))
}

/**
 * Create a comment.
 * @param {json} body - json with the following structure: {"user_id": integer, "text": string}.
 * @return {integer} id of the new comment.
 * @require comment
 */
function createComment(req, res){
  console.log(`Creating comment with data: ${JSON.stringify(req.body)}...`)
  Comment.create(req.body, {"fields": ["user_id", "text"]})
  .then((id) => res.status(201).send(id), (err) => res.status(500).send(err))
}

/**
 * Update the given attributes of a comment.
 * @param {integer} id - the id of the comment to be updated.
 * @param {json} body - json with at least one of the following attributes: {"user_id": integer, "text": string}.
 * @return {integer} number of rows affected.
 * @require comment
 */
function updateComment(req, res){
  const {id} = req.params
  console.log(`Creating comment ${id} with data: ${JSON.stringify(req.body)}...`)
  Comment.update(req.body, {
    "where": {"comment_id" : id},
    "fields": Object.keys(req.body)
  })
  .then((rows) => res.status(200).send(rows), (err) => res.status(500).send(err))
}

/**
 * Detele a specific comment from the database.
 * @param {integer} id - the id of the comment.
 * @require comment
 */
function deleteComment(req, res){
  const {id} = req.params
  console.log(`Deleting comment ${id}...`)
  Comment.destroy({
    "where": {"comment_id" : id}
  })
  .then(() => res.sendStatus(200), (err) => res.status(500).send(err))
}

module.exports = {
  getComments,
  getCommentById,
  createComment,
  updateComment,
  deleteComment
}
