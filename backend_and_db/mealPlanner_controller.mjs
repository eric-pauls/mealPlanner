import express from "express";
import mysql from "mysql";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();

const PORT = 9604;

app.use(cors());
app.use(bodyParser());

// setup database
const db = mysql.createPool({
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
    res.send(data);
  });
});

// GET request for recipes
app.get("/recipes", (req, res) => {
  let sql = `SELECT * FROM recipes`;
  db.query(sql, function (err, data, fields) {
    if (err) throw err;
    res.send(data);
  });
});

// GET request for meal plans
app.get("/mealplans", (req, res) => {
  let sql = `SELECT * FROM mealPlans`;
  db.query(sql, function (err, data, fields) {
    if (err) throw err;
    res.send(data);
  });
});

// GET request for meal types
app.get("/mealtypes", (req, res) => {
  let sql = `SELECT * FROM mealTypes`;
  db.query(sql, function (err, data, fields) {
    if (err) throw err;
    res.send(data);
  });
});

// POST for recipes
app.post('/recipes', function(req, res){
  let sql = "INSERT INTO recipes (recipeName, ingredients, instruction, calorieCount, userID) VALUES (:recipeNameInput, :ingredientsInput, :instructionInput, :calorieCountInput, :userIDInput)";
  let inserts = [req.body.recipeName, req.body.ingredients, req.body.instruction, req.body.calorieCount, req.body.userID];
  db.query(sql, inserts, function(err, data, fields){
      if (err) throw err;
      console.log("Recipe added successfully.")
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
