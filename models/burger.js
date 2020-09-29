// Import the ORM to create functions that will interact with the database.
const orm = require('../config/orm.js');

// Code that will call the ORM functions using burger specific input for the ORM.
const burger = {
 // TODO: make sure this works right. copyied from cat.js on 13-MVC.
  all: function(callback) {
    orm.all("burgers", function(res) {
      callback(res);
    });
  },
  create: function(cols, vals, callback) {
    orm.create("burgers", cols, vals, function(res) {
      callback(res);
    });
  },
  update: function(objColVals, condition, callback) {
    orm.update("burgers", objColVals, condition, function(res) {
      callback(res);
    });
  },
  delete: function(condition, callback) {
    orm.delete("burgers", condition, function(res) {
      callback(res);
    });
  }
};

// Export the database functions for the controller (burgers_controller.js).
module.exports = burger;