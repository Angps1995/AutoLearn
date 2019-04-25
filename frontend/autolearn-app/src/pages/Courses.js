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
        return (
            <div>
                <input type="text" className="input" onChange={this.handleChange} placeholder="Search..." />


                {this.state.courses.map((course, index) => {
                    return (
                        <Card>
                            <Card.Body>
                                <span style={{ display: "inline-flex" }}>
                                    <Button style={{ maxWidth: "100px", maxHeight: "30px", textAlign: "center", margin: "auto" }}>{course.votes}</Button>
                                    <span>
                                        <Card.Title>{course.name}</Card.Title>
                                        <Card.Text>{course.description}</Card.Text>
                                    </span>
                                </span>
                                <Row style={{ paddingLeft: "70px" }}>
                                    {JSON.parse(course.tags).map((tag) => {
                                        return (
                                            <Card.Text style={{ paddingRight: "10px" }}>{tag}</Card.Text>
                                        );
                                    })}
                                </Row>
                                <Link to={{
                                    pathname: '/path',
                                    course_id: course.id
                                }}>Path</Link>
                            </Card.Body>
                        </Card>
                    );
                })}
            </div>
        );
    }
}

Courses.propTypes = {

};
