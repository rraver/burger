var path = require('path');
var connection = require('../config/connection.js');

// Helper function for SQL syntax.
function objToSql(ob) {
    var arr = [];

    for (var key in ob) {
        if (Object.hasOwnProperty.call(ob, key)) {
            arr.push(key + "=" + ob[key]);
        }
    }

    return arr.toString();
}

//Function for printing
function printQuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}

//Establish the ORM variable with strings
var orm = {
    all: function(table, cb) {
        var queryString = 'SELECT * FROM ' + table + ';';
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    //create function
    create: function(table, cols, vals, cb) {

        var queryString = 'INSERT INTO ' + table + ' (' + cols + ') VALUES (' + printQuestionMarks(vals.length) + ') ';
        console.log(queryString);
        connection.query(queryString, vals, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });

    },
    //update function
    update: function(table, objColVals, condition, cb) {
        var queryString = "UPDATE " + table;

        queryString += " SET ";
        queryString += objToSql(objColVals);
        queryString += " WHERE ";
        queryString += condition;

        console.log(queryString);
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }

            cb(result);
        });
    },
};

//Export of the ORM
module.exports = orm;
