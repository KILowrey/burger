// Import the ORM to create functions that will interact with the database.
const orm = require('../config/orm.js');

// Code that will call the ORM functions using burger specific input for the ORM.
const burger = {
  // All
  all: function() {
    return new Promise (function(resolve,reject) {
      orm.all('burgers')
      .then(function(data) {
        resolve(data);
      });
    });
  },
  // Create
  create: function(name) {
    return new Promise (function(resolve,reject) {
      orm.create('burgers', [
        "burger_name", "devoured"
      ], [
        name, false
      ])
      .then(function(data) {
        resolve(data);
      });
    });
  },
  // Update
  update: function(id) {
    return new Promise (function(resolve,reject) {
      const condition = 'id=' + id;
      orm.update('burgers', {
        devoured: true
      }, condition)
      .then(function(data) {
        resolve(data);
      });
    });
  }
};

// Export the database functions for the controller (burgers_controller.js).
module.exports = burger;