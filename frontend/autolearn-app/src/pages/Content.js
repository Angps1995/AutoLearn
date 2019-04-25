import React, { Component } from 'react';
import PropTypes from "prop-types";
import axios from 'axios';

import { InputGroup, FormControl, Button, Card } from 'react-bootstrap';

export default class Content extends Component {
    constructor () {
      super()
      this.state = {
        username: ''
      }
          this.componentDidMount = this.componentDidMount.bind(this)
    }
    componentDidMount() {
        axios.get('http://localhost:5000/paths') // change this url to whichever end point to use
          .then(response => this.setState({username: JSON.stringify(response.data)}))
    }

    render () {
      return (
          <div>
            <div className='beginner'>
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src="holder.js/100px180" />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      <p>{this.state.username}</p>
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>;
            </div>
            <div className='intermediate'>
              <p>{this.state.username}</p>
            </div>
            <div className='advanced'>
              <p>{this.state.username}</p>
            </div>
        </div>

      )
    }
}



Content.propTypes = {

};
