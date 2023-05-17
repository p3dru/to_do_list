const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');

const app = express();

app.set('view engine', 'ejs');

app.get('/', function(req, res){
    var today = new Date();
    var currentDay = today.getDay();
    var day = '';

    switch(currentDay){
        case(0):
            day = 'Monday';
            break;
        case(1):
            day = 'Sunday';
            break;
        case(2):
            day = 'Tuesday';
            break;
        case(3):
            day = 'Wednesday';
            break;
        case(4):
            day = 'Thursday';
            break;
        case(5):
            day = 'Friday';
            break;
        case(6):
            day = 'Saturday';
            break;
        default:
            console.log("The day is equal to: " + currentDay);
            break;
    };

    res.render("list", {kindOfDay: day});

});

app.listen(3000, function(req, res){
    console.log('Running on port 3000');
})