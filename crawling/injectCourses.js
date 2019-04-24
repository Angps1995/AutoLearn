'use strict';

const fs = require('fs');
const axios = require('axios');

const rawdata = fs.readFileSync('hackr.json');  
const courses = JSON.parse(rawdata);  

for (let course of courses) {
    axios.post('http://localhost:6789/courses', course)
      .then(function (response) {
        
      })
      .catch(function (error) {
        console.log(error);
      });
}

axios.get('http://localhost:6789/courses')
    .then(function (response) {
        console.log("data count:", response.data.length);
    })
    .catch(function (error) {
        console.log(error);
    });