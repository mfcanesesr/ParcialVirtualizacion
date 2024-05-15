let mongoose = require('mongoose');

class Database {
  constructor() {
    this._connect()
  }
  
_connect() {
     mongoose.connect(`mongodb://localhost:27017`)
       .then(() => {
         console.log('Database connected (:')
       })
       .catch(err => {
         console.error('Database connection error ):', err)
       })
  }
}

module.exports = new Database()