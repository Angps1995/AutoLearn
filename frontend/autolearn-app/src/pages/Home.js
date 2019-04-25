import React, { Component } from 'react';
import PropTypes from "prop-types";
import '../home.css';

import { Container, Row, Col } from 'react-bootstrap';
import { InputGroup, FormControl, Button, Card } from 'react-bootstrap';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';

export default class Home extends Component {
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
                <Row className="Home-card-row">
                  <Col>
                    <Card>
                      <Card.Img variant="top" src={require("../images/logo.svg")} />
                      <Card.Body>
                        <Card.Title>Python</Card.Title>
                        <Card.Text>
                          Some quick example text to build on the card title and make up the bulk of
                          the card's content.
                        </Card.Text>
                        <Button variant="outline-success" className="Home-go-btn">R E A D</Button>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col>
                    <Card>
                      <Card.Img variant="top" src={require("../images/logo.svg")} />
                      <Card.Body>
                        <Card.Title>HTML 5</Card.Title>
                        <Card.Text>
                          Some quick example text to build on the card title and make up the bulk of
                          the card's content.
                        </Card.Text>
                        <Button variant="outline-success" className="Home-go-btn">R E A D</Button>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col>
                    <Card>
                      <Card.Img variant="top" src={require("../images/logo.svg")} />
                      <Card.Body>
                        <Card.Title>React</Card.Title>
                        <Card.Text>
                          Some quick example text to build on the card title and make up the bulk of
                          the card's content.
                        </Card.Text>
                        <Button variant="outline-success" className="Home-go-btn">R E A D</Button>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Card>
                      <Card.Img variant="top" src={require("../images/logo.svg")} />
                      <Card.Body>
                        <Card.Title>Python</Card.Title>
                        <Card.Text>
                          Some quick example text to build on the card title and make up the bulk of
                          the card's content.
                        </Card.Text>
                        <Button variant="outline-success" className="Home-go-btn">R E A D</Button>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col>
                    <Card>
                      <Card.Img variant="top" src={require("../images/logo.svg")} />
                      <Card.Body>
                        <Card.Title>HTML 5</Card.Title>
                        <Card.Text>
                          Some quick example text to build on the card title and make up the bulk of
                          the card's content.
                        </Card.Text>
                        <Button variant="outline-success" className="Home-go-btn">R E A D</Button>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col>
                    <Card>
                      <Card.Img variant="top" src={require("../images/logo.svg")} />
                      <Card.Body>
                        <Card.Title>React</Card.Title>
                        <Card.Text>
                          Some quick example text to build on the card title and make up the bulk of
                          the card's content.
                        </Card.Text>
                        <Button variant="outline-success" className="Home-go-btn">R E A D</Button>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </Container>
            </div>
          </div>
        )
    }
}

Home.propTypes = {

};
