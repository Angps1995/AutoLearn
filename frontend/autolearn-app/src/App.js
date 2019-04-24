import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Home from './pages/Home';
import Courses from './pages/Courses';
import Path from './pages/Path';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      topics: [{
        "id": 1,
        "name": "Autodesk"
      },
      {
        "id": 2,
        "name": "Autocad"
      },
      {
        "id": 3,
        "name": "Fusion360"
      }],
      courses: [
        {
          "id": 1,
          "name": "Autodesk Infosys",
          "votes": 0,
          "link": "http://share.autodesk.com",
          "description": "Everything for Autodesk employees",
          "difficulty": "Beginner",
          "tags": [
            "autodesk",
            "wiki"
          ],
          "topic": "/topics/1"
        },
        {
          "id": 2,
          "name": "Autodesk Ufosys",
          "votes": 0,
          "link": "http://share.autodesk.com",
          "description": "Everything for Autodesk employees",
          "difficulty": "Intermediate",
          "tags": [
            "autodesk",
            "wiki"
          ],
          "topic": "/topics/2"
        },
        {
          "id": 3,
          "name": "Autodesk Outfosys",
          "votes": 0,
          "link": "http://share.autodesk.com",
          "description": "Everything for Autodesk employees",
          "difficulty": "Advance",
          "tags": [
            "autodesk",
            "wiki"
          ],
          "topic": "/topics/3"
        }],
        path: [
          {
            "id": 1,
            "name": "Introduction to Autodesk Tools",
            "votes": 0,
            "description": "Every tool/site new Autodesk employees need to know",
            "courses": [
              "/courses/1"
            ],
            "topic": "/topics/1"
          },
          {
            "id": 2,
            "name": "Introduction to Autodesk Tools",
            "votes": 0,
            "description": "Every tool/site new Autodesk intern need to know",
            "courses": [
              "/courses/2"
            ],
            "topic": "/topics/2"
          },
          {
            "id": 3,
            "name": "Introduction to Autodesk Tools",
            "votes": 0,
            "description": "Every tool/site new Autodesk executive need to know",
            "courses": [
              "/courses/3"
            ],
            "topic": "/topics/3"
          }]
    };
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

          {/* <Home />

        <Courses />

        <Path /> */}

        </header>
      </div>
    );
  }
}

