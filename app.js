const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');

const app = express();

var items = ['Buy food', 'Cook food', 'Eat food', 'Clean dishes'];

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));

app.get('/', function(req, res){
    var today = new Date();

    var options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };

    var day = today.toLocaleDateString('en-Us', options);

    res.render("list", {listTitle: day, newListItems: items});

});

app.get('/work', function(req,res){
    res.render("list", {listTitle: "workList", newListItems: "workItems"});
});

app.post('/', function(req, res){
    var item = req.body.newItem;

    if (req.body.list === "work"){
        workItems.push(item);
    } else {
        items.push(item);
        res.redirect("/");
    }
})

app.post("/work", function(req, res){
    let item = req.body.newItem;

    workItems.push(item);
    res.redirect("/work");
});

app.listen(3000, function(req, res){
    console.log('Running on port 3000');
})