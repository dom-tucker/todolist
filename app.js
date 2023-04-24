//jshint esversion:6
 
const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js")
 
const app = express();
 
var items = ["study code", "work out", "prep for post-Bacc"];
let workItems = [];
let gymItems = ["squats", "deadlifts"];
 
  app.set('view engine', 'ejs');
 
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(express.static("public"));
 
  app.get("/", function(req, res) {

  let day = date.getDate()

 
  
  res.render("list", {
    listTitle: day, 
    newListItems: items
  }); 
});
 
app.post("/", function (req, res) {
  let item = req.body.newItem;

  if (req.body.button === "Work List") {
    workItems.push(item);
    res.redirect("/work");
  } else if (req.body.button === "Gym List") {
    gymItems.push(item);
    res.redirect("/gym");
  } else {
    items.push(item);
    res.redirect("/");
  }



console.log("User input was " + item);
console.log("Now the array items contains: " + items);
});


/*====== Work List =========*/
app.get("/work", function(req, res) {
  res.render("list", { //renders list.ejs page
    listTitle: "Work List", 
    newListItems: workItems
  });
});
 

app.post("/work", function(req, res) {
  let item = req.body.newItem;
  workItems.push(item);
  res.redirect("/work");
})



/*------- Gym List -----------*/
app.get("/gym", function(req, res) {
  res.render("list", { //renders list.ejs page
    listTitle: "Gym List", 
    newListItems: gymItems
  });
});
 

app.post("/gym", function(req, res) {
  let item = req.body.newItem;
  gymItems.push(item);
  res.redirect("/gym");
})


app.get("/about", function(req, res) {
  res.render("about")
})



 
  app.listen(3000, function() {
    console.log("Server started on port 3000");
  });





  