const db = require('../Database/db-connection');
const Bill = require('./Bill');
const Sequelize = require('sequelize');
const BillMenu = require('./BillMenu');


const Menu = db.define('menu', {
  name: {
    type: Sequelize.STRING
  },
  cuisine: {
    type: Sequelize.STRING
  },
  type: {
    type: Sequelize.STRING
  },
  price: {
    type: Sequelize.INTEGER
  },
}, {
  timestamps: false
}
);

db.sync()
  .then(() => console.log('Menu DB has created'))

// Menu.associate = () => {
//   Menu.belongsToMany(Bill, {
//     through: BillMenu,
//     as: 'bill',
//     foreignKey: 'menuId'
//   });
// };


module.exports = Menu;