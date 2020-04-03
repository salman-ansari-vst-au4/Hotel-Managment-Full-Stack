import React from 'react';
import { Table } from 'react-bootstrap';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux'
import Action from '../ActionCreater/action'

let { getBill } = Action;

class Order extends React.Component {

  componentDidMount() {
    this.props.getBill()
    let count = 0;
    let myytime = setInterval(() => {
      if (count === 5) {
        clearInterval(myytime)
      }
      count++
      this.props.getBill()
    }, 1000)
  }

  render() {
    let { bill, id } = this.props;
    return (
      <>
        <h1 className="text-center display-4 mt-4"> {(bill.length === 0) ? `...` : `Thankyou for order`}</h1>
        {bill.map((data, index) => {
          if (id === data.id) {
            return (<>
              <h1 className="text-center">Your Order Bill (id:{data.id})</h1>
              <Table bordered hover key={(index).toString()}>
                <tr>
                  <td colSpan="2">Name: {data.name}</td>
                  <td colSpan="2">Mobile No.: {data.mobile}</td>
                </tr>
                <tr>
                  <td colSpan='2'>
                    Table: {(!data.table) ? 'Random' : data.table.name}
                  </td>
                  <td colSpan='2'>
                    Waiter: {(!data.waiter) ? 'Random' : data.waiter.name}
                  </td>
                </tr>
                <tr>
                  <th>Sr No.</th>
                  <th>Dish</th>
                  <th>Cuisine</th>
                  <th>Price</th>
                </tr>
                {
                  data.billmenus.map((dish, i) => {
                    return (
                      <tr key={(i).toString()}>
                        <td>{i + 1}</td>
                        <td>{dish.menu.name}</td>
                        <td>{dish.menu.cuisine}</td>
                        <td>{dish.menu.price}</td>
                      </tr>
                    )
                  })
                }
                <tr>
                  <th colSpan="3"></th>
                  <th >Total: ₹{data.total}</th>
                </tr>
              </Table>
            </>
            )
          }
        })}
      </>
    )
  }
}

const take = (state) => {
  let { bill, id } = state.restaurant;
  return {
    bill, id
  };
}

const change = (dispatch) => {
  return bindActionCreators({ getBill }, dispatch)
}

export default connect(take, change)(Order);