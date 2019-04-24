import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Home from './pages/Home';
import Courses from './pages/Courses';
import Path from './pages/Path';

import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link} from 'react-router-dom'

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
        <header>
          <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">AutoLearn</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="#home"><Link to="/">Home</Link></Nav.Link>
                <Nav.Link href="#link"><Link to="/course">Course</Link></Nav.Link>
                <Nav.Link href="#link"><Link to="/course">Path</Link></Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </header>
        <body>
          {<Home />}
        </body>
      </div>
    );
  }
}
