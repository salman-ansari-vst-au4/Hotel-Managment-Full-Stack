import React from 'react';
import { Card, Form } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux'
import Action from '../ActionCreater/action'

let { selectMenu, removeMenu, userDetail } = Action;

class MenuList extends React.Component {

  state = {
    name: '',
    number: undefined
  }

  render() {
    let { menu, selectMenu, userMenu, removeMenu, userDetail } = this.props;
    return (
      <>
        <Form className="w-50 mx-auto m-4">
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Full Name" value={this.state.name}
              onChange={(e) => {
                this.setState({
                  name: e.target.value
                })
              }} />
          </Form.Group>

          <Form.Group>
            <Form.Label>Mobile No.</Form.Label>
            <Form.Control type="number" placeholder="Mobile Number" value={this.state.number}
              onChange={(e) => {
                this.setState({
                  number: e.target.value
                })
              }} />
          </Form.Group>
        </Form>
        <section className="row text-center m-5 d-flex flex-wrap justify-content-sm-around">
          {menu.map((data, index) => {
            return (
              <Card
                className="m-2 cursor-pointer"
                bg={(userMenu.indexOf(data.id) !== -1) ? "info" : "light"}
                key={(index).toString()}
                text={(userMenu.indexOf(data.id) !== -1) ? "light" : "dark"}
                style={{ width: '18rem' }}
                onClick={() => {
                  let i = userMenu.indexOf(data.id);
                  if (i === -1)
                    selectMenu(data.id)
                  else
                    removeMenu(i)
                }}>
                <Card.Header>
                  <Card.Title>
                    {data.name}
                  </Card.Title>
                </Card.Header>
                <Card.Body>

                  <Card.Text>
                    <span>Cuisine: {data.cuisine}</span><br />
                    <span>Type: {data.type}</span><br />
                    <span>Price: {data.price}</span>
                  </Card.Text>
                </Card.Body>
              </Card>
            )
          })}
        </section >

        {(userMenu.length && this.state.number && this.state.name) ? (<Link to='/bill' className="float-right mr-5 mb-5">
          <button className="btn btn-info"
            onClick={() => {
              userDetail({
                name: this.state.name,
                number: this.state.number
              })
            }}
          >Next</button>
        </Link>) :
          (<button className="btn btn-secondary mr-5 mb-5 float-right"
            onClick={() => alert('Please select atleast one Dish and Fill Your Input')}>
            Next
          </button>)
        }
      </>
    )
  }
}

const take = (state) => {
  let { menu, userMenu } = state.restaurant;
  return {
    menu, userMenu
  };
}

const change = (dispatch) => {
  return bindActionCreators({ selectMenu, removeMenu, userDetail }, dispatch)
}

export default connect(take, change)(MenuList);