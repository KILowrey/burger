// Import MySQL connection.
const connection = require('./connection.js');

// Methods that will execute the necessary MySQL commands in the controllers.
// Methods needed in order to retrieve and store data in the database.

// If we want to pass 3 values into a mySql query we need 3 question marks turned into a string.
function printQuestionMarks(number) {
  const array = [];
  for (let i = 0; i < number; i++) {
    array.push('?');
  }
  return array.toString();
}

// Helper function to convert objecct key/value pairs to SQL syntax
function objToSql(object) {
  const array = [];
  // loop through the keys and push the key/value as a string int array
  for (let key in object) {
    const value = object[key];
    // check to skip hidden properties
    if (Object.hasOwnProperty.call(object, key)) {
      // if string w/ spaces, add quotations (Homophobic Sandwich => 'Homophobic Sandwich')
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }
      // e.g. {name: 'Homophobic Sandwich'} => ["name='Homophobic Sandwich'"]
      // e.g. {devoured: true} => ["devoured=true"]
      array.push(key + "=" + value);
    }
  }
  // translate array of strings to a sinle comma-separated string
  return array.toString();
}

// Object for all our SQL statement functions.
var orm = {
  // All
  all: function(tableInput, callback) {
    const queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, function(error, result) {
      if (error) {
        throw error;
      }
      callback(result);
    });
  },
  // Create
  create: function(table, cols, vals, callback) {
    const queryString = "INSERT INTO " + table;
    queryString += " (";
    queryString += cols.toString();
    queryString += ") ";
    queryString += "VALUES (";
    queryString += printQuestionMarks(vals.length);
    queryString += ") ";
    connection.query(queryString, vals, function(error, result) {
      if (error) {
        throw error;
      }
      callback(result);
    });
  },
  // Update
  update: function(table, objColVals, condition, callback) {
    const queryString = "UPDATE " + table;
    queryString += " SET ";
    queryString += objToSql(objColVals);
    queryString += " WHERE ";
    queryString += condition;
    connection.query(queryString, function(error, result) {
      if (error) {
        throw error;
      }
      callback(reslut);
    });
  }
};

// Export the orm object for the model (burger.js)
module.exports = orm;