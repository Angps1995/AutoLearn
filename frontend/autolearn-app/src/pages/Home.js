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
            topics: [],
            topic_image: ['http://logok.org/wp-content/uploads/2014/09/Autodesk-logo.png',
                          'https://hackr.io/tutorials/python/logo-python.svg?ver=1550834222',
                        'https://hackr.io/tutorials/javascript/logo-javascript.svg?ver=1553668920',
                         'https://hackr.io/tutorials/android-development/logo-android-development.svg?ver=1550798222', 'https://hackr.io/tutorials/react/logo-react.svg?ver=1555134603', 'https://hackr.io/tutorials/c-plus-plus/logo-c-plus-plus.svg?ver=1550843650', 'https://hackr.io/tutorials/java/logo-java.svg?ver=1550798239', 'https://hackr.io/tutorials/data-structures-algorithms/logo-data-structures-algorithms.svg?ver=1550834269', 'https://hackr.io/tutorials/angular/logo-angular.svg?ver=1550774724', 'https://hackr.io/tutorials/html-5/logo-html-5.svg?ver=1555389548', 'https://hackr.io/tutorials/c/logo-c.svg?ver=1553674176', 'https://hackr.io/tutorials/css/logo-css.svg?ver=1550727061', 'https://hackr.io/tutorials/node-js/logo-node-js.svg?ver=1555389930', 'https://hackr.io/tutorials/git/logo-git.svg?ver=1550796487', 'https://hackr.io/tutorials/c-sharp/logo-c-sharp.svg?ver=1550834232', 'https://hackr.io/tutorials/bootstrap/logo-bootstrap.svg?ver=1555328097', 'https://hackr.io/tutorials/php/logo-php.svg?ver=1550804797', 'https://hackr.io/tutorials/mysql/logo-mysql.svg?ver=1550613740', 'https://hackr.io/tutorials/information-security-ethical-hacking/logo-information-security-ethical-hacking.svg?ver=1550798260', 'https://hackr.io/tutorials/arduino/logo-arduino.svg?ver=1551766080', 'https://hackr.io/tutorials/blockchain-programming/logo-blockchain-programming.svg?ver=1550824665', 'https://hackr.io/tutorials/django/logo-django.svg?ver=1550466502', 'https://hackr.io/tutorials/unity/logo-unity.svg?ver=1550665141', 'https://hackr.io/tutorials/sql/logo-sql.svg?ver=1555309685', 'https://hackr.io/tutorials/intro-to-programming/logo-intro-to-programming.svg?ver=1550761991', 'https://hackr.io/tutorials/mongodb/logo-mongodb.svg?ver=1551354757', 'https://hackr.io/tutorials/react-native/logo-react-native.svg?ver=1555132575', 'https://hackr.io/tutorials/software-design-patterns/logo-software-design-patterns.svg?ver=1551354757', 'https://hackr.io/tutorials/vue-js/logo-vue-js.svg?ver=1555390471', 'https://hackr.io/tutorials/asp-net/logo-asp-net.svg?ver=1555328015', 'https://hackr.io/tutorials/jquery/logo-jquery.svg?ver=1550635067', 'https://hackr.io/tutorials/raspberry-pi/logo-raspberry-pi.svg?ver=1550676222', 'https://hackr.io/tutorials/golang/logo-golang.svg?ver=1555401655', 'https://hackr.io/tutorials/bitcoin/logo-bitcoin.svg?ver=1552469443', 'https://hackr.io/tutorials/firebase/logo-firebase.svg?ver=1551354757', 'https://hackr.io/tutorials/java-spring-framework/logo-java-spring-framework.svg?ver=1555390385', 'https://hackr.io/tutorials/kotlin/logo-kotlin.svg?ver=1555389603', 'https://hackr.io/tutorials/ios-swift/logo-ios-swift.svg?ver=1550689130', 'https://hackr.io/tutorials/assembly-language/logo-assembly-language.svg?ver=1550758846', 'https://hackr.io/tutorials/laravel/logo-laravel.svg?ver=1550762399', 'https://hackr.io/tutorials/operating-systems/logo-operating-systems.svg?ver=1555844112', 'https://hackr.io/tutorials/ecmascript-es/logo-ecmascript-es.svg?ver=1551354757', 'https://hackr.io/tutorials/mathematics-for-computer-science/logo-mathematics-for-computer-science.svg?ver=1551354757', 'http://mediatech.edu/wp-content/uploads/2016/09/web_development_programs_dallas_tx.jpg']
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
                          <Card.Img style={{maxHeight:"300px",maxWidth:"350px", minHeight:"300px",minWidth:"350px"}} variant="top" src={this.state.topic_image[index]} />
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
