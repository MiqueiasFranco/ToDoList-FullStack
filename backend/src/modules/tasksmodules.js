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
    return {insertId: createdTask.insertId}

}

const deleteTask = async (id) =>{
    const removedTask = await conection.execute('DELETE FROM tasks WHERE id =?',[id])
    return removedTask
}

const updatedTask = async (id, task) =>{
    const query = 'UPDATE tasks SET title = ?, status = ? WHERE id = ?'
    const {title, status} = task
    const [updatedTask] = await conection.execute(query,[title, status, id])
    return updatedTask
}

module.exports = {
    getALL,
    createTask,
    deleteTask,
    updatedTask,
}