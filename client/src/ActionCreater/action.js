import axios from 'axios';

let Action = {};
const table = 'table/read'
const waiter = 'waiter/read'
const menu = 'menu/read'
const postBill = 'bill/write'
const join = 'billmenu/write'

Action.table = () => {
  return (async (dispatch) => {
    let value = await axios.get(table);
    dispatch({
      type: "addTable", payload: value.data.table
    })
  })
}

Action.waiter = () => {
  return (async (dispatch) => {
    let value = await axios.get(waiter);
    dispatch({
      type: "addWaiter", payload: value.data.table
    })
  })
}

Action.menu = () => {
  return (async (dispatch) => {
    let value = await axios.get(menu);
    dispatch({
      type: "addMenu", payload: value.data.table
    })
  })
}

Action.billing = (data, userMenu) => {
  return (async (dispatch) => {
    let value = await axios.post(postBill, data);
    Promise.all(userMenu.map(async (res) => {
      let billMenu = {
        billId: value.data.table.id,
        menuId: res
      }
      await axios.post(join, billMenu);
    }))
    dispatch({
      type: "billing", payload: value.data.table.id
    })
  })
}

Action.getBill = () => {
  return { type: "getBill" }
}

Action.selectTable = (id) => {
  return { type: "userTable", payload: id }
}

Action.selectWaiter = (id) => {
  return { type: "userWaiter", payload: id }
}

Action.selectMenu = (id) => {
  return { type: "userMenu", payload: id }
}

Action.removeTable = (id) => {
  return { type: "removeTable", payload: id }
}

Action.removeWaiter = (id) => {
  return { type: "removeWaiter", payload: id }
}

Action.removeMenu = (id) => {
  return { type: "removeMenu", payload: id }
}

Action.userDetail = (data) => {
  return { type: "userDetail", payload: data }
}


export default Action;
