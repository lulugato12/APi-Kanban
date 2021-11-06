const express = require('express');
const bodyParser = require('body-parser');
const {conect_db, close_db} = require('./helpers/server')

/* Controllers */
const role = require('./controllers/role.controller')
const product = require('./controllers/product.controller')
const user = require('./controllers/user.controller')
const comment = require('./controllers/comment.controller')
const kanban = require('./controllers/kanban.controller')
const layout = require('./controllers/layout.controller')

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
app.get('/user', user.getUsers)
app.get('/user/:id', user.getUserById)

/* Comment */
app.get('/comment', comment.getComments)
app.get('/comment/:id', comment.getCommentById)

/* Kanban */
app.get('/kanban', kanban.getKanban)
app.get('/kanban/:id', kanban.getKanbanById)

/* Layout */
app.get('/layout', layout.getLayout)
app.get('/layout/:id', layout.getLayoutById)

/* Port */
app.listen(PORT, () => {
 console.log(`El servidor está inicializado en el puerto ${PORT}`);
});
