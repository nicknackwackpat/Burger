var connection = require("../config/connection.js");

function printQuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }
  return arr.toString();
}

function objToSql(ob) {
  let arr = [];

  
  for (var key in ob) {
    let value = ob[key];
    
    if (Object.hasOwnProperty.call(ob, key)) {
     if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }
      arr.push(key + "=" + value);
    }
  }

  return arr.toString();
};

const orm = {
  selectAll: function(tableInput) {
    var queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      return result;
    });
  },
  insertOne: function(table, cols, vals) {
    var queryString = "INSERT INTO " + table;
        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(vals.length);
        queryString += "); ";

    console.log(queryString);
    connection.query(queryString, vals, function(err, result) {
      if (err) {
        throw err;
      }
      return result;
    });
  },
  updateOne: function(table, objColVals, condition) {
    var queryString = "UPDATE " + table;

    queryString += " SET ";
    queryString += objToSql(objColVals);
    queryString += " WHERE id = ";
    queryString += condition + ";";

    console.log(queryString);
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }

      return result;
    });
  }


};

module.exports = orm;