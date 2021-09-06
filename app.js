const express = require("express");
const ejs = require("ejs");
const _ = require("lodash");

const app = express();
app.set('view engine', 'ejs');

app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));


app.get('/', function(req,res) {
  res.render('index', {pgNum: "1"});
})

app.get('/pages/:pageName', function(req, res) {
  res.render('index', {pgNum: req.params.pageName});

});

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
