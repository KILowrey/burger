// Import the ORM to create functions that will interact with the database.
const orm = require('../config/orm.js');

// Code that will call the ORM functions using burger specific input for the ORM.
const burger = {
  // Find All
  findAll: function() {
    return new Promise (function(resolve,reject) {
      orm.findAll()
      .then(function(data) {
        resolve(data);
      });
    });
  },
  // Create
  create: function(name) {
    return new Promise (function(resolve,reject) {
      orm.create(burger)
      .then(function(data) {
        resolve(data);
      });
    });
  },
  // Update
  update: function(id) {
    return new Promise (function(resolve,reject) {
      orm.update(id,eaten)
      .then(function(data) {
        resolve(data);
      });
    });
  },
  // Delete
  delete: function(id) {
    return new Promise(function(resolve,reject) {
      orm.delete(id)
      .then(function(data) {
        resolve(data);
      });
    });
  }
};

// Export the database functions for the controller (burgers_controller.js).
module.exports = burger;