const tasksModel = require('../modules/tasksmodules')

const getALL = async (_request, response) => {

    const tasks = await tasksModel.getALL()
    return response.status(200).json(tasks)

}

const createTask = async (request, response)=> {
    const createdTask = await tasksModel.createTask()
   
}

module.exports = {
    getALL,
    createTask,
}