import React, { Component } from 'react';
import { Container, Col, Row, Button, Form, Alert} from 'react-bootstrap';
import { connect } from 'react-redux';
// import { Redirect, withRouter, BrowserRouter as Router } from "react-router-dom";
import {handleLogin, handleChange} from '../actions/stockActions';


class Login extends Component {

  constructor(props){

    super(props)
    this.state ={}

    }

  
  
  render() {
    
    return (
      <div>
        <Container>
          <Row className="pt-3 pb-5 justify-content-md-center">
            <Col>
              <Form onSubmit={(e) => this.props.handleLogin(e,this.props.history)} >
                <Form.Group>
                  <Form.Label>Username:</Form.Label>
                  <Form.Control
                    name="username"  
                    placeholder="username"
                    onChange={this.props.handleChange} />
                </Form.Group>

                <Form.Group>
                  <Form.Label>Password:</Form.Label>
                  <Form.Control
                    onChange={this.props.handleChange}
                    name="password"
                    placeholder="password" />
                </Form.Group>

                <Button  variant="primary" type="submit" >
                  Login
                </Button>
          
              </Form>

            </Col>
          </Row>
        </Container>
      
      </div>
    )
  }
}

const mapStateToProps =(state)=>{
  return state.stock

}
export default connect(mapStateToProps,{handleLogin, handleChange})(Login);
