const Task = require('../models/tasks')

module.exports = app => {
    app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
      });


    app.get('/tarefas', (req, res) => {
        Task.listTasks(res)
    })

    app.get('/tarefas/:id', (req, res) => {
        const id = parseInt(req.params.id)

        Task.listTask(id, res)
    })

    app.post('/tarefas', (req, res) => {
       const task = req.body

        Task.addTask(task, res)
    }) 

    app.patch('/tarefas/:id', (req, res) => {
        const id = parseInt(req.params.id)
        const values = req.body

        // console.log(values.status)
        // if(values.status == 'concluido'){
            // var teste = Task.updateNumberOfChanges(id, values, res)
            // console.log(teste)
        // }

        Task.updateTask(id, values, res)
    })

    app.delete('/tarefas/:id', (req, res) => {
        const id = parseInt(req.params.id)

        Task.deleteTask(id, res)
    })
}