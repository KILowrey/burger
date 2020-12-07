// Import MySQL connection.
const connection = require('./connection.js');

// Object for all our SQL statement functions.
const orm = {
  // Find All
  findAll: function(tableInput) {
    return new Promise(function(res,rej) {
      const queryString = "SELECT * FROM " + tableInput + ";";
      connection.query(queryString, function(err,result) {
        if(err) throw err;
        res(result);
      });
    });
  },
  // Create
  create: function(table, cols, vals) {
    return new Promise(function(res,rej) {
      const queryString = "INSERT INTO burgers SET ?;";
      connection.query(queryString, function(err,result) {
        if (err) throw err;
        res(result);
      });
    });
  },
  // Update
  update: function(table, objColVals, condition) {
    return new Promise(function(res,rej) {
      const queryString = "UPDATE burgers SET devoured = ? WHERE id = ?;";
      connection.query(queryString, [devoured, id], function(err,result) {
        if (err) throw error;
        res(result);
      });
    });
  },
  // Delete
  delete: function(id) {
    return new Promise(function(res,rej) {
      const queryString = "DELETE FROM burgers WHERE id = " + id;
      connection.query(queryString, function(err,result) {
        if (err) throw err;
        res(result);
      });
    });
  }
};

// Export the orm object for the model (script.js)
module.exports = orm;