/**
 * @module product.controller
 * @version 1.0
 * @author Lourdes B. Cajica
 * PostgreSQL table: product
 */

const {Product} = require('../models/product');

/**
 * Return all the products from the database.
 * @return {array} array that contains the jsons of each product.
 * @require product
 */
function getProducts(req, res){
  console.log('Getting all products...');
  Product.findAll()
  .then((products) => res.status(200).send(products), (err) => res.status(500).send(err))
}

/**
 * Return an specific product from the database.
 * @param {integer} id - the id of the product.
 * @return {json} the json of the product.
 * @require product
 */
function getProductById(req, res){
  const {id} = req.params
  console.log(`Getting product ${id}...`)
  Product.findByPk(id)
  .then((product) => res.status(200).send(product), (err) => res.status(500).send(err))
}

/**
 * Create a product.
 * @param {json} body - json with the following structure: {"name": string, "weight": float}.
 * @return {integer} id of the new product.
 * @require product
 */
function createProduct(req, res){
  console.log(`Creating product with data: ${JSON.stringify(req.body)}...`)
  Product.create(req.body, {"fields": ["name", "weight"]})
  .then((id) => res.status(201).send(id), (err) => res.status(500).send(err))
}

/**
 * Update the given attributes of a product.
 * @param {integer} id - the id of the product to be updated.
 * @param {json} body - json with at least one of the following atributes: {"name": string, "weight": float}.
 * @return {integer} number of rows affected.
 * @require product
 */
function updateProduct(req, res){
  const {id} = req.params
  console.log(`Creating product ${id} with data: ${JSON.stringify(req.body)}...`)
  Product.update(req.body, {
    "where": {"product_id" : id},
    "fields": Object.keys(req.body)
  })
  .then((rows) => res.status(200).send(rows), (err) => res.status(500).send(err))
}

/**
 * Detele an specific product from the database.
 * @param {integer} id - the id of the product.
 * @require product
 */
function deleteProduct(req, res){
  const {id} = req.params
  console.log(`Deleting product ${id}...`)
  Product.destroy({
    "where": {"product_id" : id}
  })
  .then(() => res.sendStatus(200), (err) => res.status(500).send(err))
}

module.exports = {
  getProducts,
  getProductById,
  createProduct,
  deleteProduct,
  updateProduct
}
