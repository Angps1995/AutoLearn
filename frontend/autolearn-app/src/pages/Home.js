import React, { Component } from 'react';
import PropTypes from "prop-types";
import '../home.css';

import { Container, Row, Col } from 'react-bootstrap';
import { InputGroup, FormControl, Button, Card } from 'react-bootstrap';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';
import axios from "axios";

export default class Home extends Component {
    constructor () {
        super()
        this.state = {
            topics: []
        }
        this.componentDidMount = this.componentDidMount.bind(this)
    }
    componentDidMount() {
        axios.get('http://localhost:5000/topics') // change this url to whichever end point to use
            .then(response => this.setState({topics: response.data}))
    }
    render() {
        return (
          <div>
            <div className="Home-hero-div">
              <Container className="Home-hero-container">
                <Row className="Home-title-row">
                  <Col>
                    <h3 className="text-align-center">Learn at your Pace</h3>
                  </Col>
                </Row>
                <Row className="Home-subtitle-row">
                  <Col>
                    <p className="text-align-center">
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type.
                    </p>
                  </Col>
                </Row>
                <Row className="align-center">
                    <div className="Home-search-bar">
                      <InputGroup size="lg">
                        <InputGroup.Prepend>
                          <Button variant="secondary" className="Home-search-bar-btn">Search</Button>
                        </InputGroup.Prepend>
                        <FormControl aria-label="Large" aria-describedby="inputGroup-sizing-sm" placeholder="What do you want to learn today?" />
                      </InputGroup>
                    </div>
                </Row>
              </Container>
            </div>
            <div className="Home-card-div">
              <Container>
                <Row className="Home-card-title-row">
                  <Col>
                    <h3 className="text-align-center">T O P I C S</h3>
                  </Col>
                </Row>
                <Row className="Home-card-subtitle-row">
                  <Col>
                    <p className="text-align-center">
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type.
                    </p>
                  </Col>
                </Row>
                <Row className="Home-card-row text-align-center">
                  {this.state.topics
                    .map((topic, index) => {
                    return (
                      <Col md={4}>
                        <Card>
                          <Card.Img variant="top" src={require("../images/logo.svg")} />
                          <Card.Body>
                            <Card.Title className="Home-card-name">
                              <Link to={{
                                  pathname: '/course',
                                  topic_id:topic.id
                              }}>{topic.name}</Link>
                            </Card.Title>
                          </Card.Body>
                        </Card>
                      </Col>
                    );
                  })}
                </Row>
              </Container>
            </div>
          </div>
        )
    }
}

Home.propTypes = {

};
