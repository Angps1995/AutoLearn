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
            .then(response => this.setState({paths: response.data}))
    }
    render() {
        const coursesLink = this.props.location.topics;
        return (
            <div>
                <p>{coursesLink}</p>
                <input type="text" className="input" onChange={this.handleChange} placeholder="Search..." />
                {this.state.paths
                    .filter(path => path.topics === coursesLink)
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

Path.propTypes = {
    
};