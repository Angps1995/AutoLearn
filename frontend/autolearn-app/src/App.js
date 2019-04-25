import React, { Component } from 'react';
import './App.css';

import Home from './pages/Home';
import Courses from './pages/Courses';
import Path from './pages/Path';
import Content from './pages/Content';

import { Container, Row, Col } from 'react-bootstrap';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import NotFound from "./pages/NotFound";
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';


export default class App extends Component {
  constructor() {
    super();
    this.state = {
      topics: [{
        "id": 1,
        "name": "Autodesk"
      },
      {
        "id": 2,
        "name": "Autocad"
      },
      {
        "id": 3,
        "name": "Fusion360"
      }],
      courses: [
        {
          "id": 1,
          "name": "Autodesk Infosys",
          "votes": 0,
          "link": "http://share.autodesk.com",
          "description": "Everything for Autodesk employees",
          "difficulty": "Beginner",
          "tags": [
            "autodesk",
            "wiki"
          ],
          "topic": "/topics/1"
        },
        {
          "id": 2,
          "name": "Autodesk Ufosys",
          "votes": 0,
          "link": "http://share.autodesk.com",
          "description": "Everything for Autodesk employees",
          "difficulty": "Intermediate",
          "tags": [
            "autodesk",
            "wiki"
          ],
          "topic": "/topics/2"
        },
        {
          "id": 3,
          "name": "Autodesk Outfosys",
          "votes": 0,
          "link": "http://share.autodesk.com",
          "description": "Everything for Autodesk employees",
          "difficulty": "Advance",
          "tags": [
            "autodesk",
            "wiki"
          ],
          "topic": "/topics/3"
        }],
      path: [
        {
          "id": 1,
          "name": "Introduction to Autodesk Tools",
          "votes": 0,
          "description": "Every tool/site new Autodesk employees need to know",
          "courses": [
            "/courses/1"
          ],
          "topic": "/topics/1"
        },
        {
          "id": 2,
          "name": "Introduction to Autodesk Tools",
          "votes": 0,
          "description": "Every tool/site new Autodesk intern need to know",
          "courses": [
            "/courses/2"
          ],
          "topic": "/topics/2"
        },
        {
          "id": 3,
          "name": "Introduction to Autodesk Tools",
          "votes": 0,
          "description": "Every tool/site new Autodesk executive need to know",
          "courses": [
            "/courses/3"
          ],
          "topic": "/topics/3"
        }]
    };
  };

  render() {
    return (
      <div className="App">
        <Router>
          <header>
            <Navbar expand="lg" className="header-nav">
                <Navbar.Brand href="#home" className="header-title">AutoLearn</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link className="header-subtitle"><Link to="/">H O M E</Link></Nav.Link>
                <Nav.Link className="header-subtitle"><Link to="/course">C O U R S E S</Link></Nav.Link>
                <Nav.Link className="header-subtitle"><Link to="/path">P A T H</Link></Nav.Link>
                <Nav.Link className="header-subtitle"><Link to="/content">C O N T E N T</Link></Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </header>
        <body>
            <div>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/course"
                  render= {() => (
                    <Courses courses={this.state.courses} />
                  )} />
                    <Route path="/path" component={Path} />
                    <Route path="/content" component={Content} />
                    <Route component={NotFound} />
                </Switch>
            </div>
          </body>
        </Router>
        <footer>
          <Container>
            <Row>
              <p>
                H A C K A T H O N | AutoLearn © Copyright 2019
              </p>
            </Row>
          </Container>
        </footer>
      </div>
    );
  }
}
