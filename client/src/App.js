import React from 'react';
import './App.css';
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux'
import Navbar from './Component/Navbar'
import TableList from './Component/TableList'
import WaiterList from './Component/WaiterList'
import Order from './Component/Order'
import MenuList from './Component/MenuList'
import Bill from './Component/Bill'
import Action from './ActionCreater/action'
import './Css/cursor.css';

let { table, waiter, menu } = Action;



class App extends React.Component {

  async componentDidMount() {

    this.props.table();
    this.props.waiter();
    this.props.menu();

  }

  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <Route exact path='/'>
          <Redirect to='/table' />
        </Route>
        <Route path='/table'>
          <TableList />
        </Route>
        <Route path='/waiter'>
          <WaiterList />
        </Route>
        <Route path='/menu'>
          <MenuList />
        </Route>
        <Route path='/bill'>
          <Bill />
        </Route>
        <Route path='/order'>
          <Order />
        </Route>

      </BrowserRouter>
    );
  }
}

const take = (state) => {
  return {
    page: state.restaurant.page
  }
}

const change = (dispatch) => {
  return bindActionCreators({ table, waiter, menu }, dispatch)
}

export default connect(take, change)(App);
