import React, { Component } from 'react';
import PropTypes from "prop-types";
import { Container, Row, Col } from 'react-bootstrap';
import {Button, Card, CardBody, CardText, CardTitle, CardLink} from "reactstrap";
import {Link} from "react-router-dom";
import axios from 'axios';
import './courses.css';

export default class CourseDetails extends Component {
    constructor () {
        super()
        this.state = {
            paths: []
        }
        this.componentDidMount = this.componentDidMount.bind(this)
        this.upvote = this.upvote.bind(this)
    }

    componentDidMount() {
        axios.get('http://f090ce53.ngrok.io/paths') // change this url to whichever end point to use
            .then(response => {
                let pathsData = response.data['_embedded']['paths']
                pathsData.forEach(function(element, i) {
                  element['id'] = i+1
                });
                return this.setState({paths: pathsData})
            })
    }

    upvote(numOfVotes, index, paths){
        numOfVotes += 1
        var myCopiedData = paths
        myCopiedData[index].votes = numOfVotes
        this.setState({
            courses: myCopiedData
        })
        // return numOfVotes
    }

    render() {
        const courseDetails = this.props.location.course;
        let y
        if (courseDetails == undefined) {
          y = 1
        }
        return (
            <div>
              <Container>
                <Row className="Courses-title-row">
                  <Col>
                    <h3 className="text-align-center">D E T A I L S</h3>
                  </Col>
                </Row>
                <Row className="Courses-subtitle-row">
                  <Col>
                    <p className="text-align-center">
                      More details of the course.
                    </p>
                  </Col>
                </Row>
                {(() => {switch(y) {
                  case 1:
                    var paths = this.state.paths
                    return(
                      <div>
                        {paths
                            .map((path, index) => {
                            return (
                                <Card>
                                    <CardBody>
                                        <span style={{ display: "inline-flex" }}>
                                            <Button onClick={this.upvote.bind(this, path.votes, index, paths)} className="Courses-upvote-btn" style={{ maxWidth: "100px", maxHeight: "60px", minWidth: "100px", minHeight: "30px", textAlign: "center", margin: "auto" }}>{path.votes}</Button>
                                            <span>
                                              <CardTitle>{path.name}</CardTitle>
                                              <CardText>{path.description}</CardText>
                                            </span>
                                        </span>
                                    </CardBody>
                                </Card>
                            );
                        })}
                      </div>
                    )
                  default:
                    console.log(courseDetails)
                    var paths = this.state.paths.filter(path => {
                          const name = path.courses_links.split(',');
                          return name.includes('/courses/' + courseDetails.id);
                        }
                    )
                    let course_array = [courseDetails]
                    return (
                        <div>
                            <Card>
                                <CardBody>
                                    <span style={{ display: "inline-flex" }}>
                                        <Button onClick={this.upvote.bind(this, courseDetails.votes, 0, course_array)} className="Courses-upvote-btn" style={{ maxWidth: "100px", maxHeight: "60px", minWidth: "100px", minHeight: "30px", textAlign: "center", margin: "auto" }}>{courseDetails.votes}</Button>
                                        <span>
                                          <CardTitle>{courseDetails.name}</CardTitle>
                                          <CardText>{courseDetails.description}</CardText>
                                          <CardLink href={courseDetails.link}>{courseDetails.link}</CardLink>
                                        </span>
                                    </span>
                                </CardBody>
                            </Card>
                            <p className="Path-subtitle" >Suggested Paths</p>
                            {paths
                                .map((path, index) => {
                                  console.log(path)
                                return (
                                    <Card>
                                        <CardBody>
                                            <span style={{ display: "inline-flex" }}>
                                                <Button onClick={this.upvote.bind(this, path.votes, index, paths)} className="Courses-upvote-btn" style={{ maxWidth: "100px", maxHeight: "60px", minWidth: "100px", minHeight: "30px", textAlign: "center", margin: "auto" }}>{path.votes}</Button>
                                                <span>
                                                    <Link to={{
                                                        pathname: '/content',
                                                        path_id:path.id
                                                    }}>
                                                    <CardTitle>{path.name}</CardTitle>
                                                  </Link>
                                                  <CardText>{path.description}</CardText>

                                                </span>

                                            </span>
                                        </CardBody>
                                    </Card>
                                );
                            })}
                        </div>
                    );
                  }
                  })()}
              </Container>
            </div>
        );
    }
}

CourseDetails.propTypes = {

};
