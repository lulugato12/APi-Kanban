const express = require('express');
const bodyParser = require('body-parser');
const {conect_db, close_db} = require('./helpers/server');

/* Controllers */
const role = require('./controllers/role.controller');
const product = require('./controllers/product.controller');
const user = require('./controllers/user.controller');
const comment = require('./controllers/comment.controller');
const kanban = require('./controllers/kanban.controller');
const layout = require('./controllers/layout.controller');
const drawer = require('./controllers/drawer.controller');
const station = require('./controllers/station.controller');
const run = require('./controllers/run.controller');
const data = require('./controllers/data.controller');
const flow = require('./controllers/flow.controller');

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

/* Drawer */
app.get('/drawer', drawer.getDrawers)
app.get('/drawer/:id', drawer.getDrawerById)

/* Station */
app.get('/station', station.getStations)
app.get('/station/:id', station.getStationById)

/* Run */
app.get('/run', run.getRuns)
app.get('/run/:id', run.getRunById)

/* Data */
app.get('/data', data.getDatas)
app.get('/data/:id', data.getDataById)

/* Flow */
app.get('/flow', flow.getFlows)
app.get('/flow/:id', flow.getFlowById)

/* Port */
app.listen(PORT, () => {
 console.log(`El servidor está inicializado en el puerto ${PORT}`);
});
