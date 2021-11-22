import express from "express";
import mysql from "mysql";
import cors from "cors";

const app = express();

const PORT = 9604;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

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

// GET request for recipes/ meal plans
app.get("/recipesmealplans", (req, res) => {
  let sql = `SELECT * FROM recipesMealPlans`;
  db.query(sql, function (err, data, fields) {
    if (err) throw err;
    res.send(data);
  });
});

// GET request for recipes/ meal plans
app.get("/recipesmealplans/:planID", (req, res) => {
  let sql = `SELECT * FROM recipesMealPlans WHERE planID = ${req.params.planID}`;
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

// GET request for meal plans by userID
app.get("/mealplans/:userID", (req, res) => {
  let sql = `SELECT * FROM mealPlans WHERE userID = ${req.params.userID}`;
  db.query(sql, function (err, data, fields) {
    if (err) throw err;
    res.send(data);
  });
});

// GET request for recipes by recipeID
app.get("/recipes/:recipeID", (req, res) => {
  let sql = `SELECT * FROM recipes WHERE recipeID = ${req.params.recipeID}`;
  db.query(sql, function (err, data, fields) {
    if (err) throw err;
    res.send(data);
  });
});



// POST for recipes
app.post('/recipes', function(req, res){
  let sql = "INSERT INTO recipes (recipeName, ingredients, instruction, calorieCount,typeID, userID) VALUES (?, ?, ?, ?, ?, ?)";
  let inserts = [req.body.recipeName, req.body.ingredients, req.body.instruction, req.body.calorieCount, req.body.typeID, req.body.userID];
  db.query(sql, inserts, function(err, data, fields){
      if (err) throw err;
      console.log("Recipe added successfully.")
      res.status(201);
      res.end();
  });
});

// POST for users
app.post('/users', function(req, res){
  let sql = "INSERT INTO users (userName) VALUES (?)";
  let inserts = [req.body.userName];
  db.query(sql, inserts, function(err, data, fields){
      if (err) throw err;
      console.log("User added successfully.")
      res.status(201);
      res.end();
  });
});

// POST for meal plans
app.post('/mealplans', function(req, res){
  let sql = "INSERT INTO mealPlans (planName, userID) VALUES (?, ?)";
  let inserts = [req.body.planName, req.body.userID];
  db.query(sql, inserts, function(err, data, fields){
      if (err) throw err;
      res.status(201);
      res.end();
      console.log("Meal plan added successfully.")
  });
});

// POST for recipes/meal plans
app.post('/recipesmealplans', function(req, res){
  let sql = "INSERT INTO recipesMealPlans (recipeID, planID, day, assignedMeal) VALUES (?, ?, ?, ?)";
  let inserts = [req.body.recipeID, req.body.planID, req.body.day, req.body.assignedMeal];
  db.query(sql, inserts, function(err, data, fields){
      if (err) throw err;
      console.log("Recipe/Meal Plan relationship added successfully.")
      res.status(201);
      res.end();
  });
});

//  UPDATE users
app.put('/users/:userID', function(req, res){
  let sql = `UPDATE users SET userName = ? WHERE userID = ${req.params.userID}`;
  let updates = [req.body.userName];
  db.query(sql, updates, function(err, data, fields){
      if (err) throw err;
      console.log("User updated successfully.")
      res.send(data);
  });
});

//  UPDATE recipes
app.put('/recipes/:recipeID', function(req, res){
  let sql = `UPDATE recipes SET recipeName = ?, ingredients = ?, instruction = ?, calorieCount = ?, typeID = ?, userID = ? WHERE recipeID = ${req.params.recipeID}`;
  let updates = [req.body.recipeName, req.body.ingredients, req.body.instruction, req.body.calorieCount, req.body.typeID, req.body.userID];
  db.query(sql, updates, function(err, data, fields){
      if (err) throw err;
      console.log("Recipe updated successfully.")
      res.send(data);
  });
});

//  UPDATE meal plans
app.put('/mealplans/:planID', function(req, res){
  let sql = `UPDATE mealPlans SET planName = ? WHERE planID = ${req.params.planID}`;
  let updates = [req.body.planName];
  db.query(sql, updates, function(err, data, fields){
      if (err) throw err;
      console.log("Meal Plan updated successfully.")
      res.send(data);
  });
});

//  DELETE users
app.delete('/users/:userID', function(req, res){
  let sql = `DELETE FROM users WHERE userID = ?`;
  let updates = [req.params.userID];
  db.query(sql, updates, function(err, data, fields){
      if (err) throw err;
      console.log("User deleted successfully.")
      res.status(204);
      res.end();
  });
});

//  DELETE recipes
app.delete('/recipes/:recipeID', function(req, res){
  let sql = `DELETE FROM recipes WHERE recipeID = ?`;
  let updates = [req.params.recipeID];
  db.query(sql, updates, function(err, data, fields){
      if (err) throw err;
      console.log("Recipe deleted successfully.")
      res.status(204);
      res.end();
  });
});

//  DELETE meal plans
app.delete('/mealplans/:planID', function(req, res){
  let sql = `DELETE FROM mealPlans WHERE planID = ?`;
  let updates = [req.params.planID];
  db.query(sql, updates, function(err, data, fields){
      if (err) throw err;
      console.log("Meal Plan deleted successfully.")
      res.status(204);
      res.end();
  });
});

//  DELETE recipe/meal plan relationships
app.delete('/recipesmealplans/:planID/:recipeID/:day', function(req, res){
  let sql = `DELETE FROM recipesMealPlans WHERE planID = ? AND recipeID = ? AND day = ?`;
  let updates = [req.params.planID, req.params.recipeID, req.params.day];
  db.query(sql, updates, function(err, data, fields){
      if (err) throw err;
      console.log("Meal Plan entry deleted successfully.")
      res.status(204);
      res.end();
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
