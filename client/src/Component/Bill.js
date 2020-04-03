import React from 'react';
import { Table, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux'
import Action from '../ActionCreater/action'

let { billing } = Action;

function Bill(props) {

  let { userName, userMobile, userMenu, menu, total, userTable, userWaiter, table, waiter, billing, stateCopy } = props;

  return (
    <>
      <Table bordered hover>
        <tr>
          <td colSpan="2">Name: {userName}</td>
          <td colSpan="2">Mobile No.: {userMobile}</td>
        </tr>
        <tr>
          {userTable.map((data, index) => {
            let myTable = table.filter((value) => value.id === data)
            return (
              <td colSpan="2" key={(index).toString()}>
                Table: {myTable[0].name}
              </td>
            )
          })}
          {userWaiter.map((data, index) => {
            let myWaiter = waiter.filter((value) => value.id === data)
            return (
              <td colSpan="2" key={(index).toString()}>
                Waiter: {myWaiter[0].name}
              </td>
            )
          })}
        </tr>
        <tr>
          <th>Sr No.</th>
          <th>Dish</th>
          <th>Cuisine</th>
          <th>Price</th>
        </tr>
        {userMenu.map((data, index) => {
          let myMenu = menu.filter((value) => value.id === data)
          console.log(myMenu)
          return (
            <tr key={(index).toString()}>
              <td>{index + 1}</td>
              <td>{myMenu[0].name}</td>
              <td>{myMenu[0].cuisine}</td>
              <td>{myMenu[0].price}</td>
            </tr>
          )
        })}
        <tr>
          <th colSpan="3"></th>
          <th >Total: ₹{total}</th>
        </tr>
      </Table>
      <Link to='/order' className="m-5 float-right">
        <Button variant="info" size="lg"
          onClick={() => {
            const { userName, userMobile, total, userTable, userWaiter, userMenu } = stateCopy
            let data = {
              name: userName,
              mobile: userMobile,
              total,
              payment_mode: 'cod',
              tableid: userTable[0],
              waiterid: userWaiter[0],
            }
            billing(data, userMenu)
          }}>
          Genrate Bill
    </Button></Link>
    </>
  )
}

const take = (state) => {
  const { userName, userMobile, menu, userMenu, total, userTable, userWaiter, table, waiter } = state.restaurant;
  return {
    userName, userMobile, userMenu, menu, total, userTable, userWaiter, table, waiter, stateCopy: state.restaurant
  };
}

const change = (dispatch) => {
  return bindActionCreators({ billing }, dispatch)
}

export default connect(take, change)(Bill);