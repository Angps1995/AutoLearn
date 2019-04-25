import React, { Component } from 'react';
import PropTypes from "prop-types";
import { Container, Row, Col } from 'react-bootstrap';
import { InputGroup, FormControl, Button, Card } from 'react-bootstrap';
import { Link } from "react-router-dom";
import axios from "axios";

export default class Courses extends Component {
    constructor() {
        super()
        this.state = {
            courses: []
        }
        this.componentDidMount = this.componentDidMount.bind(this)
    }
    componentDidMount() {
        axios.get('http://localhost:5000/courses') // change this url to whichever end point to use
            .then(response => {
                const myData = [].concat(response.data)
                    .sort((a, b) =>
                        // console.log(a.votes>b.votes)
                        (a.votes < b.votes) ? 1 : ((b.votes < a.votes) ? -1 : 0)
                    )

                this.setState({
                    courses: myData
                })

            })
    }

    render() {
        const topicId = this.props.location.topic_id;
        if(topicId == undefined) {
          return (
              <div>
                  {this.state.courses
                      .map((course, index) => {
                      let tagsArr = course.tags.split(",");
                      return (
                          <Card>
                              <Card.Body>
                                  <span style={{ display: "inline-flex" }}>
                                      <Button style={{ maxWidth: "100px", maxHeight: "60px", minWidth: "100px", minHeight: "30px", textAlign: "center", margin: "auto" }}>{course.votes}</Button>
                                      <span>
                                          <Link to={{
                                              pathname: '/path',
                                              course: course
                                          }}>
                                              <Card.Title>{course.name}</Card.Title>
                                          </Link>
                                          <Card.Text>{course.description}</Card.Text>
                                      </span>
                                  </span>
                                  <Row style={{ paddingLeft: "120px" }}>
                                      {tagsArr.map((tag) => {
                                          return (
                                              <Card.Text style={{ paddingRight: "10px", boxSizing: "border-box" }}>{tag}</Card.Text>
                                          );
                                      })}
                                  </Row>

                              </Card.Body>
                          </Card>

                      );
                  })}
              </div>
          );
        }
        else {
          return (
              <div>
                  {this.state.courses
                      .filter(course => course.topic_id === topicId)
                      .map((course, index) => {
                      let tagsArr = course.tags.split(",");
                      return (
                          <Card>
                              <Card.Body>
                                  <span style={{ display: "inline-flex" }}>
                                      <Button style={{ maxWidth: "100px", maxHeight: "60px", minWidth: "100px", minHeight: "30px", textAlign: "center", margin: "auto" }}>{course.votes}</Button>
                                      <span>
                                          <Link to={{
                                              pathname: '/path',
                                              course: course
                                          }}>
                                              <Card.Title>{course.name}</Card.Title>
                                          </Link>
                                          <Card.Text>{course.description}</Card.Text>
                                      </span>
                                  </span>
                                  <Row style={{ paddingLeft: "120px" }}>
                                      {tagsArr.map((tag) => {
                                          return (
                                              <Card.Text style={{ paddingRight: "10px", boxSizing: "border-box" }}>{tag}</Card.Text>
                                          );
                                      })}
                                  </Row>

                              </Card.Body>
                          </Card>

                      );
                  })}
              </div>
          );
        }

    }
}

Courses.propTypes = {

};
