import React, { Component } from 'react';
import PropTypes from "prop-types";
import { Container, Row, Col } from 'react-bootstrap';
import { InputGroup, FormControl, Button, Card } from 'react-bootstrap';
import { Link } from "react-router-dom";
import axios from "axios";
import './courses.css';

export default class Courses extends Component {
    constructor() {
        super()
        this.state = {
            courses: []
        }
        this.componentDidMount = this.componentDidMount.bind(this)
        this.upvote = this.upvote.bind(this)
    }
    componentDidMount() {
        axios.get('http://fe26f005.ngrok.io/courses') // change this url to whichever end point to use
            .then(response => {
                const myData = [].concat(response.data['_embedded']['courses'])
                myData.forEach(function(element, i) {
                    element['id'] = i+1
                });
                myData.sort((a, b) =>
                        // console.log(a.votes>b.votes)
                        (a.votes < b.votes) ? 1 : ((b.votes < a.votes) ? -1 : 0)
                )

                this.setState({
                    courses: myData
                })

            })
    }

    upvote(numOfVotes, index, courses){
        numOfVotes += 1
        var myCopiedData = courses
        myCopiedData[index].votes = numOfVotes
        console.log(numOfVotes)
        this.setState({
            courses: myCopiedData
        })
        // return numOfVotes
    }
    render() {
        const topicLink = this.props.location.topic_id;
        let x
        if (topicLink == undefined) {
          x = 1
        }
        return (
            <div>
              <Container>
                <Row className="Courses-title-row">
                  <Col>
                    <h3 className="text-align-center">C O U R S E S</h3>
                  </Col>
                </Row>
                <Row className="Courses-subtitle-row">
                  <Col>
                    <p className="text-align-center">
                      Showing a list of courses, sorted by popularity.
                    </p>
                  </Col>
                </Row>
                {(() => {switch(x) {
                  case 1:
                    var courses = this.state.courses
                    return(
                      <div>
                        {courses
                            .map((course, index) => {
                            let tagsArr
                            if(course.tags == null){
                                tagsArr = []
                            } else {
                                tagsArr = course.tags.split(",");
                            }
                            return (
                                <Card>
                                    <Card.Body>
                                        <span style={{ display: "inline-flex" }}>
                                            <Button onClick={this.upvote.bind(this, course.votes, index, courses)} className="Courses-upvote-btn" style={{ maxWidth: "100px", maxHeight: "60px", minWidth: "100px", minHeight: "30px", textAlign: "center", margin: "auto" }}>{course.votes}</Button>
                                            <span>
                                                <Link to={{
                                                    pathname: '/course-details',
                                                    course: course
                                                }}>
                                                    <Card.Title>{course.name}</Card.Title>
                                                </Link>
                                                <Card.Text>{course.description}</Card.Text>
                                            </span>
                                        </span>
                                        <Row style={{ paddingLeft: "165px"}} className="Courses-tags-row">
                                            {tagsArr.map((tag) => {
                                                return (
                                                    <Card.Text style={{ paddingRight: "10px", boxSizing: "border-box" }}>{tag}</Card.Text>
                                                )
                                            })}
                                        </Row>
                                    </Card.Body>
                                </Card>
                            )
                        })}
                      </div>
                    )
                  default:
                    var courses = this.state.courses.filter(course => course.topicLink === topicLink)
                    return (
                      <div>
                        {
                            courses
                            .map((course, index) => {
                            let tagsArr = course.tags.split(",");
                            return (
                                <Card>
                                    <Card.Body>
                                        <span style={{ display: "inline-flex" }}>
                                            <Button onClick={this.upvote.bind(this, course.votes, index, courses)} className="Courses-upvote-btn" style={{ maxWidth: "100px", maxHeight: "60px", minWidth: "100px", minHeight: "30px", textAlign: "center", margin: "auto" }}>{course.votes}</Button>
                                            <span>
                                                <Link to={{
                                                    pathname: '/course-details',
                                                    course: course
                                                    // course_id: course_id
                                                }}>
                                                    <Card.Title>{course.name}</Card.Title>
                                                </Link>
                                                <Card.Text>{course.description}</Card.Text>
                                            </span>
                                        </span>
                                        <Row style={{ paddingLeft: "165px"}} className="Courses-tags-row">
                                            {tagsArr.map((tag) => {
                                                return (
                                                    <Button className="Courses-tag-btn" style={{ paddingRight: "10px", boxSizing: "border-box" }}>{tag}</Button>
                                                )
                                            })}
                                        </Row>
                                    </Card.Body>
                                </Card>
                            )
                        })}
                      </div>
                    )
                  }
                  })()}
              </Container>
            </div>
        )
      }
}

Courses.propTypes = {

};
