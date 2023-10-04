const mysql2 = require('mysql2')

class Connection {
  constructor() {
    if (!this.pool) {
      console.log('creating connection...')
      this.pool = mysql2.createPool({
        connectionLimit: 100,
        host: 'localhost',
        user: 'root',
        password: 'No',
        database: 'admin'
      })

      return this.pool
    }

    return this.pool
  }
}

const instance = new Connection()

module.exports = instance;