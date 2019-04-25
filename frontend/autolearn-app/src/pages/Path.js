import React, { Component } from 'react';
import PropTypes from "prop-types";
import {Button, Card, CardBody, CardText, CardTitle} from "reactstrap";
import {Link} from "react-router-dom";

export default class Path extends Component {
    render() {
        const {paths} = this.props;

        return (
            <div>
                <input type="text" className="input" onChange={this.handleChange} placeholder="Search..." />
                {paths.map((path, index) => {
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

Path.propTypes = {
    
};