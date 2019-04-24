'use strict';

const fs = require('fs');
const axios = require('axios');

const rawdata = fs.readFileSync('combined-data.json');  
const courses = JSON.parse(rawdata);  

let index = 2;
for (let course of courses) {
    course["id"] = index++;
    axios.post('http://localhost:6789/courses', course)
      .then(function (response) {
        
      })
      .catch(function (error) {
        console.log(error);
      });
}

const getCourses = (callback) => {
    axios.get('http://localhost:6789/courses')
    .then(function (response) {
        
        callback(response.data);
        // console.log("data count:", response.data.length);
    })
    .catch(function (error) {
        console.log(error);
    });
};

const mapTopicToString = (data) => {
    let dataToTopicMapping = {}
    data.forEach((element) => {
        if (!dataToTopicMapping.hasOwnProperty(element['topic'])) {
            dataToTopicMapping[element['topic']] = `/topic/${Object.keys(dataToTopicMapping).length + 1}`;
        }
    })
    let index = 1;
    Object.keys(dataToTopicMapping).forEach((key) => {
        let post_obj = {
            "id": index++,
            "name": key
        }
        axios.post('http://localhost:6789/topics', post_obj)
        .then(function (response) {
          
        })
        .catch(function (error) {
          console.log(error);
        });  
    })

    data.forEach((element) => {
        let id = element["id"];
        element['topic'] = dataToTopicMapping[element['topic']]
        console.log(element['topic'])
        axios.put(`http://localhost:6789/courses/${id}`, element)
        .then(function (response) {
          
        })
        .catch(function (error) {
          console.log(error);
        });
    })
}

getCourses(mapTopicToString)