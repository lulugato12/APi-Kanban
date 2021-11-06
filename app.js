const express = require('express');
const bodyParser = require('body-parser');
const {conect_db, close_db} = require('./helpers/server')
const role = require('./controllers/role.controller')
const product = require('./controllers/product.controller')

/* App */
const app = express();
const PORT = 3000;

/* Middleware */
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/*  Routes */
app.route('/').get((req, res) => res.send('DKS Base...'))

/* Roles */
app.get('/role', role.getRoles)
app.get('/role/:id', role.getRoleById)

/* Products */
app.get('/product', product.getProducts)
app.get('/product/:id', product.getProductById)

/* User */

/* Port */
app.listen(PORT, () => {
 console.log(`El servidor está inicializado en el puerto ${PORT}`);
});
