import React, { Component } from 'react';
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import axios from 'axios';

import { InputGroup, FormControl, Button, Card, Badge, Container, Row, Col  } from 'react-bootstrap';

export default class Content extends Component {
    constructor () {
      super()
      this.state = {
        path: '',
        course: []
      }
          this.componentDidMount = this.componentDidMount.bind(this)
    }
    componentDidMount() {
        const path_id = this.props.location.path_id;
        // const path_id = "45"
        var path_link = "http://localhost:5000/paths/" + path_id
        var course_link = "http://localhost:5000/courses"
        axios.get(path_link) // change this url to whichever end point to use
          .then(response => this.setState({path: response.data}))
        axios.get(course_link) // change this url to whichever end point to use
          .then(response => this.setState({course: response.data}))

    }

    // this.setState({username: JSON.stringify(response.data)})
    render () {
        console.log(this.state.course)
        var course_links = String(this.state.path.courses_links).split(",");
        var course_ids = []
        for (var i=0; i<course_links.length;i++){
            course_ids.push(parseInt(course_links[i].split("/")[2]))
        }
        var course_data = [];
        for (var i=0; i<this.state.course.length;i++){
            if (course_ids.includes(this.state.course[i].id))
                course_data.push(this.state.course[i])
        }
        var beginner = []
        var intermediate = []
        var advanced = []
         for (var i=0; i<course_data.length;i++){
          console.log(course_data[i])
          if (course_data[i].difficulty == "Beginner"){
              beginner.push(course_data[i]);
          }
          else if (course_data[i].difficulty == "Intermediate"){
              intermediate.push(course_data[i]);
          }
          else{
              advanced.push(course_data[i]);
          }
      }
        return (
          <div>
            <div className='beginner'>
            <h1 style={{background:"black", color:"white"}}>
                Beginner
            </h1>
            <Row className="Home-card-row text-align-center">
                { beginner.map((course, index) => {
                    return (
                        <Col md={4}>
                            <Card style={{ width: "100%" }}>
                              <Card.Img variant="top" src={course.image_link}/>
                              <Card.Body>
                                <Card.Title>{course.name}</Card.Title>
                                <Card.Text>
                                  <p>{course.description}</p>
                                </Card.Text>
                                <Link to={{
                                    pathname: '/course-details',
                                    course:course
                                }}>
                                <Button variant="primary">View Course</Button>
                              </Link>
                              </Card.Body>
                            </Card>
                        </Col>
                    );
                })}
            </Row>
            </div>
            <div className='intermediate'>
                <h1 style={{background:"black", color:"white"}}>
                    Intermediate
                </h1>
                <Row className="Home-card-row text-align-center">
                    { intermediate.map((course, index) => {
                        return (
                            <Col md={4}>
                                <Card style={{ width: "100%" }}>
                                  <Card.Img variant="top" src={course.image_link}/>
                                  <Card.Body>
                                    <Card.Title>{course.name}</Card.Title>
                                    <Card.Text>
                                      <p>{course.description}</p>
                                    </Card.Text>
                                    <Link to={{
                                        pathname: '/course-details',
                                        course:course.id
                                    }}>
                                    <Button variant="primary">View Course</Button>
                                  </Link>
                                  </Card.Body>
                                </Card>
                            </Col>
                        );
                    })}
                </Row>
            </div>
            <div className='advanced'>
                <h1 style={{background:"black", color:"white"}}>
                    Advanced
                </h1>
                <Row className="Home-card-row text-align-center">
                    { advanced.map((course, index) => {
                        return (
                            <Col md={4}>
                                <Card style={{ width: "100%" }}>
                                  <Card.Img variant="top" src={course.image_link}/>
                                  <Card.Body>
                                    <Card.Title>{course.name}</Card.Title>
                                    <Card.Text>
                                      <p>{course.description}</p>
                                    </Card.Text>
                                    <Link to={{
                                        pathname: '/course-details',
                                        course:course
                                    }}>
                                    <Button variant="primary">View Course</Button>
                                  </Link>
                                  </Card.Body>
                                </Card>
                            </Col>
                        );
                    })}
                </Row>
            </div>
        </div>

        )
    }
}



Content.propTypes = {

};
