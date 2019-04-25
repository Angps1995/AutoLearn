import React, { Component } from 'react';
import PropTypes from "prop-types";
import axios from 'axios';

export default class Content extends Component {
    constructor () {
      super()
      this.state = {
        username: ''
      }
          this.componentDidMount = this.componentDidMount.bind(this)
    }
    componentDidMount() {
        axios.get('http://localhost:5000/courses') // change this url to whichever end point to use
          .then(response => this.setState({username: JSON.stringify(response.data)}))
    }

    render () {
      return (
        <div className='button__container'>
          <p>{this.state.username}</p>
        </div>
      )
    }
}



Content.propTypes = {

};
