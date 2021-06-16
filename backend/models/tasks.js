const moment = require('moment')
const connection = require('../infrastructure/connection')

class Task {
    addTask(task, res) {
        const createAt = moment().format('YYYY-MM-DD hh:mm:ss')
        const updatedAt = moment().format('YYYY-MM-DD hh:mm:ss')

        const adjustedTask = {...task, createAt, updatedAt}

        const sql = 'INSERT INTO Tasks SET ?'

        connection.query(sql, adjustedTask, (error, result) => {
            if(error) {
                res.status(400).json(error)
            } else {
                res.status(201).json(task)
            }
        })
    }

    listTasks(res) {
        const sql = 'SELECT * FROM Tasks'

        connection.query(sql, (error, result) => {
            if(error) {
                res.status(400).json(error)
            } else {
                res.status(200).json(result)
            }
        })
    }

    listTask(id, res) {
        const sql = `SELECT * FROM Tasks WHERE id=${id}`

        connection.query(sql, (error, result) => {
            const task = result[0]
            if(error) {
                res.status(400).json(error)
            } else {
                res.status(200).json(task)
            }
        })
    }

    updateTask(id, values, res) {

        const sqlSelect = 'SELECT status, numberOfChanges FROM Tasks WHERE id=?'

        connection.query(sqlSelect, id, (error, result) => {
            if(error) {
                res.status(400).json(error)
            } else {
                var numberOfChanges = 0;

                if(values && values.status == 'concluido' && result[0].status == 'pendente') {
                    numberOfChanges = (result[0].numberOfChanges == null ? 0 : result[0].numberOfChanges)
                    numberOfChanges++
                    if(numberOfChanges > 2) {
                        res.status(400).json('A tarefa só pode ser alterada de concluída para pendente apenas duas vezes')
                        return;
                    }
                    values.numberOfChanges = numberOfChanges
                }

                const sql = 'UPDATE Tasks SET ? WHERE id=?'

                connection.query(sql, [values, id], (error, result) => {
                    if(error) {
                        res.status(400).json(error)
                    } else {
                        res.status(200).json({...values, id})
                    }
                })
            }
        })
    }

    static updateNumberOfChanges(id, values, res) {
        const sql = 'SELECT status, numberOfChanges FROM Tasks WHERE id=?'

        connection.query(sql, id, (error, result) => {
            if(error) {
                res.status(400).json(error)
            } else {
                // var numberOfChanges;
                // if(result[0].status == 'pendente') {
                    var numberOfChanges = result[0].numberOfChanges
                    // numberOfChanges = (numberOfChanges == null ? 1 : numberOfChanges++)
                    return numberOfChanges;
                    // res.status(200).json(result[0])
                // }
            }
        })
    }

    deleteTask(id, res) {
        const sql = 'DELETE FROM Tasks WHERE id=?'

        connection.query(sql, id, (error, result) => {
            if(error) {
                res.status(400).json(error)
            } else {
                res.status(200).json({id})
            }
        })
    }
}

module.exports = new Task