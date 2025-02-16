const tasksModel = require('../modules/tasksmodules')

const getALL = async (_request, response) => {

    const tasks = await tasksModel.getALL()
    return response.status(200).json(tasks)

}

const createTask = async (request, response)=> {
    const createdTask = await tasksModel.createTask(request.body)
    return response.status(201).json(createdTask)
   
}

const deleteTask = async(request, response) => {
    const {id} = request.params
    await tasksModel.deleteTask(id)
    return response.status(204).json()
}
const updatedTask = async (request, response) =>{
    const {id} = request.params 
    await tasksModel.updatedTask(id, request.body)
    return response.status(204).json()
}

module.exports = {
    getALL,
    createTask,
    deleteTask,
    updatedTask,
}