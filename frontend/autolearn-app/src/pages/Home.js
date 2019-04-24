import React, { Component } from 'react';
import PropTypes from "prop-types";
import '../home.css';

import { Container, Row, Col } from 'react-bootstrap';
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import logo from '../logo.svg';

export default class Home extends Component {
    render() {
        return (
          <div>
            <div className="Home-hero-div">
              <Container>
                <Row className="align-center">
                    <div className="Home-search-bar">
                      <InputGroup size="lg">
                        <InputGroup.Prepend>
                          <Button variant="secondary" className="Home-search-bar-btn">Search</Button>
                        </InputGroup.Prepend>
                        <FormControl aria-label="Large" aria-describedby="inputGroup-sizing-sm" />
                      </InputGroup>
                    </div>
                </Row>
              </Container>
            </div>
            <div>
              <Container>
                <Row>
                  <Col>1 of 3</Col>
                  <Col>2 of 3</Col>
                  <Col>3 of 3</Col>
                </Row>
              </Container>
            </div>
          </div>
        )
    }
}

Home.propTypes = {

};
