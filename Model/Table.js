const db = require('../Database/db-connection');
const Sequelize = require('sequelize');

const Table = db.define('table', {
  name: {
    type: Sequelize.STRING
  },
  floor: {
    type: Sequelize.INTEGER
  },
  strength: {
    type: Sequelize.INTEGER
  }
}, {
  timestamps: false
});

db.sync()
  .then(() => console.log('Table DB has created'))

module.exports = Table;