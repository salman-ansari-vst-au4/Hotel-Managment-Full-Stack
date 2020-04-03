import axios from 'axios';

let initialState = {
  id: '',
  table: [],
  menu: [],
  waiter: [],
  userName: '',
  userMobile: '',
  userTable: [],
  userWaiter: [],
  userMenu: [],
  bill: [],
  total: 0
}

export default function movie(state = initialState, action) {
  let stateCopy = JSON.parse(JSON.stringify(state));
  const { type, payload } = action;
  switch (type) {

    case 'addTable':
      stateCopy.table = [...stateCopy.table, ...payload];
      return stateCopy;

    case 'addWaiter':
      stateCopy.waiter = [...stateCopy.waiter, ...payload];
      return stateCopy;

    case 'addMenu':
      stateCopy.menu = [...stateCopy.menu, ...payload];
      return stateCopy;

    case 'userTable':
      stateCopy.userTable = []
      stateCopy.userTable.push(payload);
      return stateCopy;

    case 'userWaiter':
      stateCopy.userWaiter = []
      stateCopy.userWaiter.push(payload);
      return stateCopy;

    case 'userMenu':
      stateCopy.userMenu.push(payload);
      stateCopy.total = addTotal(stateCopy.menu, stateCopy.userMenu)
      return stateCopy;

    case 'removeTable':
      stateCopy.userTable.splice(payload, 1);
      return stateCopy;

    case 'removeWaiter':
      stateCopy.userWaiter.splice(payload, 1);
      return stateCopy;

    case 'removeMenu':
      stateCopy.userMenu.splice(payload, 1);
      stateCopy.total = addTotal(stateCopy.menu, stateCopy.userMenu)
      return stateCopy;

    case 'userDetail':
      stateCopy.userName = payload.name;
      stateCopy.userMobile = payload.number;
      return stateCopy;

    case 'billing':
      stateCopy.id = payload
      console.log('id', stateCopy.id)
      return stateCopy

    case 'getBill':
      axios.get(`bill/joining/${stateCopy.id}`)
        .then(bill => {
          stateCopy.bill = [bill.data.table]
          console.log("bill-reducer", stateCopy.bill, stateCopy.id);
          return stateCopy
        })

    default: return stateCopy;
  }
}

let addTotal = (menu, myMenu) => {
  let sum = 0;
  if (!myMenu.length) return 0;
  for (let i = 0; i < myMenu.length; i++) {
    for (let j = 0; j < menu.length; j++) {
      if (menu[j].id === myMenu[i]) {
        sum += menu[j].price;
      }
    }
  }
  return sum;
}
