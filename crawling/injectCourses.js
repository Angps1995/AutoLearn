'use strict';
//MOCK SERVER - http://localhost:6789
//REAL SERVER - http://25927072.ngrok.io
const fs = require('fs');
const axios = require('axios');

const rawdata = fs.readFileSync('combined-data.json');  
const courses = JSON.parse(rawdata);  

const mapTopicToString = (data) => {
    let dataToTopicMapping = {}
    let TopicToDataMapping = {}
    data.forEach((element) => {
        if (!dataToTopicMapping.hasOwnProperty(element['topic'])) {
            dataToTopicMapping[element['topic']] = `/topics/${Object.keys(dataToTopicMapping).length + 2}`;
        }
        let name = element["topic"]
        element["topic"] = dataToTopicMapping[element['topic']]
        TopicToDataMapping[element['topic']] = name
    })

    //Insert paths
    let index = 2;
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



    let inserted = 0
    let currTopic = "";
    let path_obj = {}
    index = 2;
    data.forEach((element, counter, dataArr) => {
        if (element["topic"] !== currTopic) {
            if (!isEmpty(path_obj)){
                path_obj ["courses_links"] = JSON.stringify(path_obj["courses_links"])
                axios.post('http://localhost:6789/paths', path_obj)
                .then(function (response) {
                })
                .catch(function (error) {
                    console.log(error);
                });
            }
        
            currTopic = element["topic"]
            inserted = 0

            path_obj = {
                "id": index++,
                "name": `Learn ${TopicToDataMapping[element['topic']]}`,
                "votes": 0,
                "description": `This is a learning path for ${TopicToDataMapping[element['topic']]} users`,
                "courses_links": [],
                "topic": `${element['topic']}`,
                "topic_id": parseInt(element['topic'].substring(8))
            }
        }
        if (inserted < 5) {
            path_obj['courses_links'].push(`/courses/${counter + 2}`)
            dataArr[counter]['path_id'] = index - 1;
            inserted++
        } else {
            dataArr[counter]['path_id'] = 45   
        }

    })

    //Insert courses
    index = 2;
    for (let course of data) {
        course["id"] = index++;
        course ["tags"] = JSON.stringify(course["tags"])
        course ["topic_id"] = parseInt(course["topic"].substring(8))
        course ["votes"] = parseInt(course ["votes"])
        axios.post('http://localhost:6789/courses', course)
        .then(function (response) {
        })
        .catch(function (error) {
            console.log(error);
        });
    }
}

function isEmpty(obj) {
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
}

mapTopicToString(courses)