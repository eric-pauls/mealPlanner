import express from "express";
import mysql from "mysql";
import cors from "cors";

const app = express();

const PORT = 9604;

app.use(cors());

// setup database
const db = mysql.createConnection({
  host: "classmysql.engr.oregonstate.edu",
  user: "cs340_chintyl",
  password: "3239",
  database: "cs340_chintyl",
});

// GET request for users
app.get("/users", (req, res) => {
  let sql = `SELECT * FROM users`;
  db.query(sql, function (err, data, fields) {
    if (err) throw err;
    res.json({
      status: 200,
      data,
      message: "User lists retrieved successfully",
    });
  });
});

// GET request for recipes
app.get("/recipes", (req, res) => {
  let sql = `SELECT * FROM recipes`;
  db.query(sql, function (err, data, fields) {
    if (err) throw err;
    res.json({
      status: 200,
      data,
      message: "Recipes retrieved successfully",
    });
  });
});

// GET request for meal plans
app.get("/mealplans", (req, res) => {
  let sql = `SELECT * FROM mealPlans`;
  db.query(sql, function (err, data, fields) {
    if (err) throw err;
    res.json({
      status: 200,
      data,
      message: "Meal Plans retrieved successfully",
    });
  });
});

// GET request for meal types
app.get("/mealtypes", (req, res) => {
  let sql = `SELECT * FROM mealTypes`;
  db.query(sql, function (err, data, fields) {
    if (err) throw err;
    res.json({
      status: 200,
      data,
      message: "Meal Types retrieved successfully",
    });
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
