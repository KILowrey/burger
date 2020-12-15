// Import MySQL connection.
const connection = require('./connection.js');

// Object for all our SQL statement functions.
const orm = {
  // Find All
  findAll: function() {
    return new Promise(function(resolve,reject) {
      const queryString = "SELECT * FROM burgers;";
      connection.query(queryString, function(err,data) {
        if(err) reject(err);
        resolve(data);
      });
    })
  },
  // Create
  create: function(burger) {
    return new Promise(function(resolve,reject) {
      const queryString = "INSERT INTO burgers SET ?;";
      connection.query(queryString, burger, function(err,data) {
        if (err) reject(err);
        resolve(data);
      });
    });
  },
  // Update
  update: function(id, devoured) {
    return new Promise(function(resolve,reject) {
      const queryString = "UPDATE burgers SET devoured = ? WHERE id = ?;";
      connection.query(queryString, [devoured, id], function(err,data) {
        if (err) reject(err);
        resolve(data);
      });
    });
  },
  // Delete
  delete: function(id) {
    return new Promise(function(resolve,reject) {
      const queryString = "DELETE FROM burgers WHERE id = " + id;
      connection.query(queryString, function(err,data) {
        if (err) reject(err);
        resolve(data);
      });
    });
  }
};

// Export the orm object for the model (script.js)
module.exports = orm;