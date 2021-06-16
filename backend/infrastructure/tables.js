const { prependOnceListener } = require("./connection")

class Tables {
    init(connection) {
        this.connection = connection

        this.createTasks()
    }

    createTasks() {
        const sql = 'CREATE TABLE IF NOT EXISTS Tasks (id INT NOT NULL AUTO_INCREMENT, task VARCHAR(50) NOT NULL, description TEXT, status VARCHAR(20) NOT NULL, user VARCHAR(60), email VARCHAR(60), numberOfChanges INT, createAt DATETIME NOT NULL, updatedAt DATETIME, PRIMARY KEY(id))'

        this.connection.query(sql, error => {
            if(error) {
                console.log(error)
            } else {
                console.log('Tabela de tasks criada com sucesso')
            }
        })
    }
}

module.exports = new Tables