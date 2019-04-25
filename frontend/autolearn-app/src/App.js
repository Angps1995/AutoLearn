import React, { Component } from 'react';
import './App.css';

import Home from './pages/Home';
import Courses from './pages/Courses';
import Path from './pages/Path';
import Content from './pages/Content';

import { Container, Row, Col } from 'react-bootstrap';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { InputGroup, FormControl, Button, Card, Modal, Form, Table } from 'react-bootstrap';
import NotFound from "./pages/NotFound";
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';
import axios from 'axios';


export default class App extends Component {
  constructor() {
    super();
    this.state = {
      courseDetails :{
        "name": "This is an example name",
        "description": "This is an example description",
        "difficulty": "Beginner",
        "image_link": "https://pluralsight.imgix.net/course-images/java-web-fundamentals-v1.jpg?w=120",
        "link": "https://www.example.link.com",
        "tags": "",
        "topic": "/topics/44",
        "votes": 0,
        "path_id": 46,
        "topic_id": 44
      },
      pathDetails : {
        "name": "",
        "votes": 0,
        "description": "This is an example learning path",
        "courses_links": "/courses/869",
        "topic": "/topics/44",
        "topic_id": 44
      },
      show: false,
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
          "name": "Autodesk_Infosys",
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
          "name": "The Python Bible | Everything You Need to Program in Python",
          "votes": 95,
          "link": "https://hackr.io/tutorial/the-python-bible-everything-you-need-to-program-in-python",
          "description": null,
          "difficulty": "Beginner",
          "tags": [
            "Paid",
            "Video",
            "Beginner",
            "Python3"
          ],
          "topic": "/topics/2"
        },
        {
          "id": 3,
          "name": "Downloading Files Using Python",
          "votes": 0,
          "link": "https://hackr.io/tutorial/downloading-files-using-python",
          "description": null,
          "difficulty": "Advance",
          "tags": [
            "Free",
            "Beginner"
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
    this.submitFormData = this.submitFormData.bind(this);
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleChange = this.handleChange.bind(this);
  };

  submitFormData() {
    axios.post('http://89db2a0d.ngrok.io/paths', this.state.pathDetails) // change this url to whichever end point to use
      .then(response => {
      })
    axios.post('http://localhost:5000/courses', this.state.courseDetails) // change this url to whichever end point to use
      .then(response => {
      })
    
    this.handleClose()
  }
  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  handleChange(event){

    switch (event.target.id) {
      case "name":
        this.state.courseDetails["name"] = event.target.value
        break;
      case "description":
        this.state.courseDetails["description"] = event.target.value
        break;
      case "tags":
        this.state.courseDetails["tags"] = event.target.value
        break;
      case "link":
        this.state.courseDetails["link"] = event.target.value
        break;
      case "difficulty":
        this.state.courseDetails["difficulty"] = event.target.value
        break;
      case "lp_name":
        this.state.pathDetails["name"] = event.target.value
        break;
      case "lp_description":
        this.state.pathDetails["description"] = event.target.value
        break;
      default:
        break;
    }
  }

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
            <Button variant="outline-success" className="Home-card-view-all-btn" onClick={this.handleShow}>C R E A T E</Button>
          </header>
          <body>
            <div>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/course" component={Courses}/>
                    {/* <Route path="/course"
                  render={() => (
                    <Courses courses={this.state.courses} />
                  )} /> */}
                    <Route path="/path" component={Path}/>
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
        <Modal show={this.state.show} onHide={this.handleClose} size="lg">
            <Modal.Header closeButton>
            <Modal.Title>C R E A T E Course</Modal.Title>
            </Modal.Header>
            <Modal.Body>

              <Form id= "createCourse">
                <Form.Group controlId="exampleForm.ControlInput1">
                  <Form.Label>Name of Course</Form.Label>
                  <Form.Control id="name" type="text" className="form-input" placeholder="Course name" onChange={this.handleChange}/>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                  <Form.Label>Description</Form.Label>
                  <Form.Control id="description" as="textarea" rows="3" onChange={this.handleChange}/>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlInput1">
                  <Form.Label>Link to Course</Form.Label>
                  <Form.Control id="link" type="text" className="form-input" placeholder="https://www.example.com" onChange={this.handleChange} />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlSelect1">
                  <Form.Label>Difficulty</Form.Label>
                  <Form.Control id="difficulty" as="select" onChange={this.handleChange}>
                    <option>Beginner</option>
                    <option>Intermediate</option>
                    <option>Advanced</option>
                  </Form.Control>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                  <Form.Label>Tags (Separate each tag with a ',')</Form.Label>
                  <Form.Control id="tags" as="textarea" rows="3" onChange={this.handleChange}/>
                </Form.Group>
              </Form>

              <Form id= "createPath" onSubmit ={this.submitFormData} >
                <Form.Group controlId="exampleForm.ControlInput1">
                  <Form.Label>Name of Learning Path</Form.Label>
                  <Form.Control id ="lp_name" type="text" className="form-input" placeholder="Path name" onChange={this.handleChange} />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                  <Form.Label>Description</Form.Label>
                  <Form.Control id="lp_description" as="textarea" rows="3" onChange={this.handleChange}/>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                  <Form.Label>Courses</Form.Label>
                  <InputGroup className="mb-3">
                    <FormControl
                      placeholder="Course's name"
                      aria-label="Course's name"
                      aria-describedby="basic-addon2"
                      className="form-input"
                    />
                    <InputGroup.Append>
                      <Button variant="outline-secondary" className="Home-go-btn">Add</Button>
                    </InputGroup.Append>
                  </InputGroup>
                </Form.Group>
              </Form>

            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={this.handleClose}>
                Close
              </Button>
              <Button variant="primary" className="Home-form-submit-btn" onClick={this.submitFormData}>
                Submit
              </Button>
            </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
