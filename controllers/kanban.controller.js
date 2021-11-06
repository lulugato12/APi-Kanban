const {DataTypes} = require('sequelize');
const {conect_db, close_db} = require('../helpers/server')
const {Kanban} = require('../models/kanban')

function getKanban(req, res){
  console.log('Getting all kanban...');
  Kanban.findAll()
  .then((roles) => res.status(200).send(roles), (err) => res.status(500).send(err))
}

function getKanbanById(req, res){
  const {id} = req.params
  console.log(`Getting kanban ${id}...`)
  Kanban.findByPk(id)
  .then((role) => res.status(200).send(role), (err) => res.status(500).send(err))

}

module.exports = {
  getKanban,
  getKanbanById
}
