import React, { Component } from 'react';
import PropTypes from "prop-types";
import {Button, Card, CardBody, CardText, CardTitle} from "reactstrap";
import {Link} from "react-router-dom";
import axios from 'axios';

export default class Path extends Component {
    constructor () {
        super()
        this.state = {
            paths: []
        }
        this.componentDidMount = this.componentDidMount.bind(this)
    }
    componentDidMount() {
        axios.get('http://localhost:5000/paths') // change this url to whichever end point to use
            .then(response => {
                return this.setState({paths: response.data})
            })
    }
    render() {
        const courseDetails = this.props.location.course;
        if(courseDetails == undefined) {
          return (
              <div>
                  {this.state.paths
                      .map((path, index) => {
                      return (
                          <Card>
                              <CardBody>
                                  <CardTitle>{path.name}</CardTitle>
                                  <CardTitle>{path.id}</CardTitle>
                                  <CardText>{path.description}</CardText>
                                  <Button>{path.votes}</Button>
                              </CardBody>
                          </Card>
                      );
                  })}
              </div>
          );
        }
        else {
          return (
              <div>
                  <Card>
                      <CardBody>
                          <CardTitle>{courseDetails.name}</CardTitle>
                          <CardTitle>{courseDetails.id}</CardTitle>
                          <CardText>{courseDetails.description}</CardText>
                          <Button>{courseDetails.votes}</Button>
                      </CardBody>
                  </Card>
                  <p>Suggested Paths</p>
                  {this.state.paths
                      .filter(path => {
                              const name = path.courses_links.split(',');
                              return name.includes('/courses/' + courseDetails.id);
                          }

                      )
                      .map((path, index) => {
                      return (
                          <Card>
                              <CardBody>
                                  <CardTitle>{path.name}</CardTitle>
                                  <CardTitle>{path.id}</CardTitle>
                                  <CardText>{path.description}</CardText>
                                  <Button>{path.votes}</Button>
                              </CardBody>
                          </Card>
                      );
                  })}
              </div>
          );
        }
    }
}

Path.propTypes = {

};
