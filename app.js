/**
 * @module app
 * @version 1.0
 * @author Lourdes B. Cajica
 */

const express = require('express')
const bodyParser = require('body-parser')
const {conect_db, close_db} = require('./helpers/server')

/* Controllers */
const role = require('./controllers/role.controller')
const product = require('./controllers/product.controller')
const user = require('./controllers/user.controller')
const comment = require('./controllers/comment.controller')
const kanban = require('./controllers/kanban.controller')
const layout = require('./controllers/layout.controller')
const drawer = require('./controllers/drawer.controller')
const station = require('./controllers/station.controller')
const run = require('./controllers/run.controller')
const data = require('./controllers/data.controller')
const flow = require('./controllers/flow.controller')

/* App */
const app = express()
const PORT = 3000

/* Middleware */
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

/*  Routes */
app.route('/').get((req, res) => res.send('DKS Base...'))

app.use(function(req,res, next){
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    next();
});

/* Roles */
app.get('/role', role.getRoles)
app.get('/role/:id', role.getRoleById)
app.post('/role', role.createRole)
app.delete('/role/:id', role.deleteRole)

/* Products */
app.get('/product', product.getProducts)
app.get('/product/:id', product.getProductById)
app.post('/product', product.createProduct)
app.put('/product/:id', product.updateProduct)
app.delete('/product/:id', product.deleteProduct)

/* User */
app.get('/user', user.getUsers)
app.get('/user/:id', user.getUserById)
app.post('/user', user.createUser)
app.put('/user/:id', user.updateUser)
app.delete('/user/:id', user.deleteUser)

/* Comment */
app.get('/comment', comment.getComments)
app.get('/comment/:id', comment.getCommentById)
app.post('/comment', comment.createComment)
app.put('/comment/:id', comment.updateComment)
app.delete('/comment/:id', comment.deleteComment)

/* Kanban */
app.get('/kanban', kanban.getKanbans)
app.get('/kanban/:id', kanban.getKanbanById)
app.post('/kanban', kanban.createKanban)
app.put('/kanban/:id', kanban.updateKanban)
app.delete('/kanban/:id', kanban.deleteKanban)

/* Layout */
app.get('/layout', layout.getLayouts)
app.get('/layout/:id', layout.getLayoutById)
app.post('/layout', layout.createLayout)
app.put('/layout/:id', layout.updateLayout)
app.delete('/layout/:id', layout.deleteLayout)

/* Drawer */
app.get('/drawer', drawer.getDrawers)
app.get('/drawer/:id', drawer.getDrawerById)
app.post('/drawer', drawer.createDrawer)
app.put('/drawer/:id', drawer.updateDrawer)
app.delete('/drawer/:id', drawer.deleteDrawer)

/* Station */
app.get('/station', station.getStations)
app.get('/station/:id', station.getStationById)
app.post('/station', station.createStation)
app.put('/station/:id', station.updateStation)
app.delete('/station/:id', station.deleteStation)

/* Run */
app.get('/run', run.getRuns)
app.get('/run/:id', run.getRunById)
app.post('/run', run.createRun)
app.put('/run/:id', run.updateRun)
app.delete('/run/:id', run.deleteRun)

/* Data */
app.get('/data', data.getData)
app.get('/data/:id', data.getDataById)

/* Flow */
app.get('/flow', flow.getFlows)
app.get('/flow/:id', flow.getFlowById)
app.post('/flow', flow.createFlow)
app.delete('/flow/:id', flow.deleteFlow)

/* Port */
app.listen(PORT, () => {
 console.log(`El servidor está inicializado en el puerto ${PORT}`)
})
