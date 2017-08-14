//establish modules and imports of other files
var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js');

//route to the default
router.get('/', function(req, res) {
    burger.all(function(data) {
        var hbsObj = {
            burger: data
        };
//        console.log(hbsObj);
        res.render("index", hbsObj);
    });
});

//Post from the default site
router.post("/", function(req, res) {
  burger.create(["burger_name"],[req.body.name], function() {
    res.redirect("/");
  });
});

//Addition of burger
router.put("/:id", function(req, res) {
  var condition = "id = " + req.params.id;
  console.log("condition", condition);
  //Call update SQL method using ORM to add burger
  burger.update({
    devoured: req.body.devoured
  }, condition, function() {
    res.redirect("/");
  });
});

//export the router 
module.exports = router;