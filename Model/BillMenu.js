const db = require('../Database/db-connection');
const Sequelize = require('sequelize');
const Bill = require('./Bill');
const Menu = require('./Menu');

const BillMenu = db.define('billmenu', {
  name: {
    type: Sequelize.STRING
  },
},
  {
    timestamps: false
  }
);


db.sync()
  .then(() => console.log('BillMenu DB has created'))

module.exports = BillMenu;