import React, { Component } from 'react';
import {
  Container, Row, Col
} from 'reactstrap';
class Body extends Component{
  render(){
    return(
      <div>
        <Container md="4">
          <Row >
            <Col md="4">Hello World</Col>
            <Col md="4">Hello World</Col>
            <Col md="4">Hello World</Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default Body;
