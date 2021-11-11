module.exports = function () {
  const express = require("express");
  const app = express();

  function getUser(res, mysql, context, complete) {
    mysql.pool.query("", function (error, results, fields) {
      if (error) {
        res.write(JSON.stringify(error));
        res.end();
      }
      context.planets = results;
      complete();
    });
  }

  function getMealPlan(res, mysql, context, complete) {
    mysql.pool.query("", function (error, results, fields) {
      if (error) {
        res.write(JSON.stringify(error));
        res.end();
      }
      context.planets = results;
      complete();
    });
  }

  function getRecipe(res, mysql, context, complete) {
    mysql.pool.query("", function (error, results, fields) {
      if (error) {
        res.write(JSON.stringify(error));
        res.end();
      }
      context.planets = results;
      complete();
    });
  }

  function getMealType(res, mysql, context, complete) {
    mysql.pool.query("", function (error, results, fields) {
      if (error) {
        res.write(JSON.stringify(error));
        res.end();
      }
      context.planets = results;
      complete();
    });
  }

// display all users



};

