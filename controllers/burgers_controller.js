// Dependance
const express = require('express');
// Create the router for the app
const router = express.Router();
// Import the model (burger.js) to use its database functions.
const burger = require('../models/burger.js');

// Create all out routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  burger.all(function(data) {
    // "hbsObject" is for Handlebars-Object
    let hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

// this one is a little shakey. copied over from catsController.js but didn't inclued "devoered" when they *did* include sleepy.
// TODO: MAKE SURE THIS WORKS AS IT'S SUPPOSED TO
router.post("/api/burgers", function(req, res) {
  burger.create([
    "name"
  ], [
    req.body.name
  ], function(result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});

// This is also copied over and probably need serious edits
// TODO: MAKE SURE THIS WORKS AS IT'S SUPPOSED TO
router.put("/api/burgers/:id", function(req, res) {
  let condition = "id = " + req.params.id;
  console.log("condition", condition);
  burger.update({
    devoured: req.body.devoured
  }, condition, function(result) {
    if (result.changedRows == 0) {
      //If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// There's also a router.delete but I don't think I'm gonna touch that yet cause I'm not sure if I need it.

// Export routes for server.js to use.
module.exports = router;