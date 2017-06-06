var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var db = require("../models");

// Create all our routes and set up logic within those routes where required.
//Each route works with the ORM.js to perform the specific functions. 
router.get("/", function(req, res) {
  db.Burger.findAll({}).then(function(data) {
    var hbsObject = {
      burgers: data
    };    
    res.render("index", hbsObject);
  })
});

router.post("/", function(req, res) {
  db.Burger.create({
    burger_name: req.body.burger_name
  }).then(function() {
        res.redirect("/");
  });
});

//describes where we want to update, in this case the devoured boolean from false to true 

router.put("/:id", function(req, res) {
  db.Burger.update({
      devoured: true
  }, {
      where: {
      id: req.params.id
  }
  }).then(function() {
    res.redirect("/");
  });
});


// Export routes for server.js to use.
module.exports = router;