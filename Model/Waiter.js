const db = require('../Database/db-connection');
const Sequelize = require('sequelize');

const Waiter = db.define('waiter', {
  name: {
    type: Sequelize.STRING
  },
  age: {
    type: Sequelize.INTEGER
  },
  mobile: {
    type: Sequelize.INTEGER
  },
  rating: {
    type: Sequelize.FLOAT
  },
  experience: {
    type: Sequelize.INTEGER
  },
}, {
  timestamps: false
}
);

db.sync()
  .then(() => console.log('Waiter DB has created'))


module.exports = Waiter;