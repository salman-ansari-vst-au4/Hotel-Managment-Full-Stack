import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux'
import Action from '../ActionCreater/action'

let { selectWaiter, removeWaiter } = Action;

function WaiterList(props) {
  let { waiter, selectWaiter, userWaiter, removeWaiter } = props;
  return (
    <>
      <section className="row text-center m-5 d-flex flex-wrap justify-content-sm-around">
        {waiter.map((data, index) => {
          return (
            <Card
              className="m-2 cursor-pointer"
              bg={(userWaiter.indexOf(data.id) !== -1) ? "info" : "light"}
              key={(index).toString()}
              text={(userWaiter.indexOf(data.id) !== -1) ? "light" : "dark"}
              style={{ width: '18rem' }}
              onClick={() => {
                let i = userWaiter.indexOf(data.id);
                if (i === -1)
                  selectWaiter(data.id)
                else
                  removeWaiter(i)
              }}>
              <Card.Header>
                <Card.Title>
                  {data.name}
                </Card.Title>
              </Card.Header>
              <Card.Body>

                <Card.Text>
                  <span>Age: {data.age}</span><br />
                  <span>Mobile: {data.mobile}</span><br />
                  <span>Experience: {data.experience}</span><br />
                  <span>Rating: {data.rating}</span>
                </Card.Text>
              </Card.Body>
            </Card>
          )
        })}
      </section >
      {(userWaiter.length) ? (<Link to='/menu' className="mr-5 mb-5 float-right">
        <button className="btn btn-info">Next</button>
      </Link>) :
        <button className="btn btn-secondary mr-5 mb-5 float-right" onClick={() => alert('Please select atleast one Waiter')}>Next</button>
      }
    </>
  )
}

const take = (state) => {
  let { waiter, userWaiter } = state.restaurant
  return {
    waiter, userWaiter
  };
}

const change = (dispatch) => {
  return bindActionCreators({ selectWaiter, removeWaiter }, dispatch)
}

export default connect(take, change)(WaiterList);