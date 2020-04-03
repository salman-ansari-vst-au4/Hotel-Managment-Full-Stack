const db = require('../Database/db-connection');
const Sequelize = require('sequelize');
const Table = require('./Table');
const Waiter = require('./Waiter');
const Menu = require('./Menu');
const BillMenu = require('./BillMenu');

const Bill = db.define('bill', {
  name: {
    type: Sequelize.STRING
  },
  mobile: {
    type: Sequelize.BIGINT
  },
  total: {
    type: Sequelize.INTEGER
  },
  payment_mode: {
    type: Sequelize.STRING
  },
}, {
  timestamps: false
}
);

db.sync()
  .then(() => console.log('Bill DB has created'))

//connect with table
Bill.belongsTo(Table, { foreignKey: 'tableid' });

//connect with waiter
Bill.belongsTo(Waiter, { foreignKey: 'waiterid' });

BillMenu.belongsTo(Menu);

Bill.hasMany(BillMenu)
BillMenu.belongsTo(Bill);


// Bill.associate = () => {
//   Bill.belongsToMany(Menu, {
//     through: BillMenu,
//     as: 'menu',
//     foreignKey: 'billId'
//   });
// };

module.exports = Bill;