import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux'
import Action from '../ActionCreater/action'

let { selectTable, removeTable } = Action;

function TableList(props) {
  let { table, selectTable, userTable, removeTable } = props;

  return (
    <>
      <section className="row text-center m-5 d-flex flex-wrap justify-content-sm-around">
        {table.map((data, index) => {
          return (
            <Card
              className="m-2 cursor-pointer"
              bg={(userTable.indexOf(data.id) !== -1) ? "info" : "light"}
              key={(index).toString()}
              text={(userTable.indexOf(data.id) !== -1) ? "light" : "dark"}
              style={{ width: '18rem' }}
              onClick={() => {
                let i = userTable.indexOf(data.id);
                if (i === -1)
                  selectTable(data.id)
                else
                  removeTable(i)
              }}>
              <Card.Header>
                <Card.Title>
                  {data.name}
                </Card.Title>
              </Card.Header>
              <Card.Body>

                <Card.Text>
                  <span>{data.name}</span><br/>
                  <span>Strength: {data.strength}</span><br/>
                  <span>Floor: {data.floor}</span>
                </Card.Text>
              </Card.Body>
            </Card>
          )
        })}
      </section >
      {(userTable.length) ? (<Link to='/waiter' className="mr-5 mb-5 float-right">
        <button className="btn btn-info">Next</button>
      </Link>) :
        <button className="btn btn-secondary mr-5 mb-5 float-right" onClick={() => alert('Please select atleast one Table')}>Next</button>
      }
    </>
  )
}

const take = (state) => {
  let { table, userTable } = state.restaurant;
  return {
    table, userTable
  };
}

const change = (dispatch) => {
  return bindActionCreators({ selectTable, removeTable }, dispatch)
}

export default connect(take, change)(TableList);