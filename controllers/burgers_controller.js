// Dependance
const express = require('express');
const router = express.Router();
const burger = require('../models/burger.js');

// get route -> index
router.get('/', function(req,res) {
  burger.findAll().then(function(data){
    res.render("index", {burgers:data}); // { burger_data: "" }
  })
});

// post route -> back to index
router.post('/api/burgers', function(req,res) {
  // takes the request object using it as input for burger.addBurger
  burger.create(req.body).then(function(data) {
    res.json(data);
  });
});

// put route -> back to index
router.put('/api/burgers/:id', function(req,res) {
  burger.update(req.params.id, function(result) {
    res.sendStatus(200);
  });
});

// Export routes for server.js to use.
module.exports = router;