const express = require('express')
const router = express.Router()
const tasksController = require('./controllers/tasksController')
const tasksMiddleware = require('./middlewares/tasksMiddlewares')

router.get('/tasks', tasksController.getALL)
router.post('/tasks', tasksMiddleware.validateFieldTitle, tasksController.createTask)
router.delete('/tasks/:id', tasksController.deleteTask)
router.put('/tasks/:id',tasksMiddleware.validateFieldTitle,tasksMiddleware.validateFieldStatus, tasksController.updatedTask)

 module.exports = router