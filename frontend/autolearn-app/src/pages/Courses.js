import React, { Component } from 'react';
import PropTypes from "prop-types";
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
import {Link} from "react-router-dom";

export default class Courses extends Component {
    render() {
        const {courses} = this.props;
        
        return (
            <div>
                <input type="text" className="input" onChange={this.handleChange} placeholder="Search..." />
                {courses.map((course, index) => {
                    return (
                        <Card>
                            <CardBody>
                                <CardTitle>{course.name}</CardTitle>
                                <CardTitle>{course.id}</CardTitle>
                                <CardText>{course.description}</CardText>
                                <Button>{course.votes}</Button>
                                <Link to={{
                                    pathname: '/path/'+ course.name,
                                    state: 'id'
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