// Dependance
const express = require('express');
const router = express.Router();
const burger = require('../models/burger.js');

// get route -> index
router.get('/', function(req,res) {
  res.redirect('/burgers');
});

// the main page
router.get('/burgers', function(req,res) {
  burger.all(function(burgerData) {
    // wrapper for orm.js that using MySQL query callback will return burger_data, render to index w/ handlebar
    res.render('index', { burger_data: burgerData });
  });
});

// post route -> back to index
router.post('/burgers/create', function(req,res) {
  // takes the request object using it as input for burger.addBurger
  burger.create(req.body.burger_name, function(result) {
    // render back to index with handle
    res.redirect('/');
  });
});

// put route -> back to index
router.put('/burgers/:id', function(req,res) {
  burger.update(req.params.id, function(result) {
    res.sendStatus(200);
  });
});

// Export routes for server.js to use.
module.exports = router;