import React, { Component } from 'react';
import PropTypes from "prop-types";
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
import {Link} from "react-router-dom";
import axios from "axios";

export default class Courses extends Component {
    constructor () {
        super()
        this.state = {
            courses: []
        }
        this.componentDidMount = this.componentDidMount.bind(this)
    }
    componentDidMount() {
        axios.get('http://localhost:5000/courses') // change this url to whichever end point to use
            .then(response => this.setState({courses: response.data}))
    }
    render() {
        
        return (
            <div>
                <input type="text" className="input" onChange={this.handleChange} placeholder="Search..." />
                {this.state.courses.map((course, index) => {
                    return (
                        <Card>
                            <CardBody>
                                <CardTitle>{course.name}</CardTitle>
                                <CardTitle>{course.id}</CardTitle>
                                <CardText>{course.description}</CardText>
                                <Button>{course.votes}</Button>
                                <Link to={{
                                    pathname: '/path',
                                    course_id:course.id
                                }}>Path</Link>
                            </CardBody>
                        </Card>
                    );
                })}
            </div>
        );
    }
}

Courses.propTypes = {

};