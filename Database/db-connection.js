const Sequelize = require('sequelize');

const db = new Sequelize('restaurant_salman', 'postgres', 'postgres', {
  host: 'localhost',
  dialect: 'postgres'
})

db.authenticate()
  .then(() => {
    console.log('Database connected');
  })

module.exports = db;