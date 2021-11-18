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
      
  });
});

// POST for users
app.post('/users', function(req, res){
  let sql = "INSERT INTO users (userName) VALUES (?)";
  let inserts = [req.body.userName];
  db.query(sql, inserts, function(err, data, fields){
      if (err) throw err;
      console.log("User added successfully.")
      
  });
});

// POST for meal plans
app.post('/mealplans', function(req, res){
  let sql = "INSERT INTO mealPlans (planName, userID) VALUES (?, ?)";
  let inserts = [req.body.planName, req.body.userID];
  db.query(sql, inserts, function(err, data, fields){
      if (err) throw err;
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
      
  });
});


app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
