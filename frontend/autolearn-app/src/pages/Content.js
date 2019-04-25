import React, { Component } from 'react';
import PropTypes from "prop-types";
import axios from 'axios';

export default class Content extends Component {
    constructor () {
      super()
      this.state = {
        username: ''
      }
      this.handleClick = this.handleClick.bind(this)
    }
    handleClick () {
       axios.get('http://localhost:5000/paths')
         .then(response => this.setState({username: response.data[0].name}))

     }

    render () {
      return (
        <div className='button__container'>
          <button className='button' onClick={this.handleClick}>
            Click Me
          </button>
          <p>{this.state.username}</p>
        </div>
      )
    }
}



Content.propTypes = {

};
