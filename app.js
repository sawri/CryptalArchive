const express = require("express");
const ejs = require("ejs");

const pages = 4;

const app = express();
app.set('view engine', 'ejs');

app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));


app.get('/', function(req,res) {
  res.render('index', {pgNum: "1", pages: pages});
})

app.get('/pages/:pageName', function(req, res) {
  const pgNum = req.params.pageName;
  if (pgNum <= pages) {
    res.render('index', {pgNum: pgNum, pages: pages});
  }
  else {
    res.render('error');
  }
});

app.listen(process.env.PORT || 3000, function() {
  console.log("Server started on port 3000");
});
