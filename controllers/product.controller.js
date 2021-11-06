const {DataTypes} = require('sequelize');
const {conect_db, close_db} = require('../helpers/server')
const {Product} = require('../models/product')

function getProducts(req, res){
  console.log('Getting all products...');
  Product.findAll()
  .then((roles) => res.status(200).send(roles), (err) => res.status(500).send(err))
}

function getProductById(req, res){
  const {id} = req.params
  console.log(`Getting product ${id}...`)
  Product.findByPk(id)
  .then((role) => res.status(200).send(role), (err) => res.status(500).send(err))

}

module.exports = {
  getProducts,
  getProductById
}
