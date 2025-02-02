const conection = require('./conection')

const getALL = async ()=> {
    const [tasks] = await conection.execute('SELECT * FROM tasks')
    return tasks
}

const createTask = async (task)=> {
    const{title} = task
    const dateUTC = new Date(Date.now()).toUTCString()
    const query = 'INSERT INTO tasks (title, status, created_at) VALUES (?, ?, ?)'
    const [createdTask] = await conection.execute(query, [title, 'pendente', dateUTC])
    return createdTask

}

module.exports = {
    getALL,
    createTask,
}