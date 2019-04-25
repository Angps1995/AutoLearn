import React, { Component } from 'react';
import PropTypes from "prop-types";

// import {
//     Card, CardImg, CardText, CardBody,
//     CardTitle, CardSubtitle, Button
// } from 'reactstrap';

import { Container, Row, Col } from 'react-bootstrap';
import { InputGroup, FormControl, Button, Card } from 'react-bootstrap';

export default class Courses extends Component {
    render() {
        const { courses } = this.props;

        return (
            <div>
                <input type="text" className="input" onChange={this.handleChange} placeholder="Search..." />
                {courses.map((course, index) => {
                    return (
                        <Card>
                            <Card.Body>
                                <span style={{ display: "inline-flex" }}>
                                    <Button style={{maxWidth:"40px", maxHeight:"30px", textAlign:"center", margin:"auto"}}>{course.votes}</Button>
                                    <span>
                                        <Card.Title>{course.name}</Card.Title>
                                        <Card.Text>{course.description}</Card.Text>
                                    </span>
                                </span>
                                <Row style={{paddingLeft:"70px"}}>
                                       {course.tags.map((tag) => {
                                        return (
                                            <Card.Text style={{ paddingRight: "10px" }}>{tag}</Card.Text>
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

Courses.propTypes = {

};