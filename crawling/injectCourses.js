'use strict';

const fs = require('fs');

const rawdata = fs.readFileSync('hackr.json');  
const courses = JSON.parse(rawdata);  
console.log(courses.length);

// for (let course in courses) {
    
// }