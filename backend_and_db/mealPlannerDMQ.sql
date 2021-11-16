-- Data Manipulation Queries


-- Get all recipes for the recipes table
SELECT * FROM recipes;

-- Select specific recipe
SELECT recipeID AS recipeName, ingredients, instruction, calorieCount FROM recipes WHERE recipeID = :selectedRecipeID;

-- Get all users for the users table
SELECT * FROM users;

-- Get all meal plans for the meal plans table
SELECT * FROM mealPlans;

-- Select specific meal plan
SELECT planID AS planName FROM mealPlans WHERE planID = :selectedPlanID;

-- Get all meal types for the meal types table
SELECT * FROM mealTypes;

-- Create new user
INSERT INTO users (userName)
VALUES (:userNameInput);

-- Create new recipe
INSERT INTO recipes (recipeName, ingredients, instruction, calorieCount)
VALUES (:recipeNameInput, :ingredientsInput, :instructionInput, :calorieCountInput);

-- Create new meal plan
INSERT INTO mealPlans (planName)
VALUES (:planNameInput);

-- Create new meal type
INSERT INTO mealTypes (mealName)
VALUES (:mealNameInput);

-- Delete a recipe
DELETE FROM recipes WHERE recipeID = :selectedRecipeID;

-- Delete a meal plan
DELETE FROM mealPlans WHERE planID = :selectedPlanID;

-- Delete a user
DELETE FROM users WHERE userID = :selectedUserID;

-- Delete a meal type
DELETE FROM mealTypes WHERE typeID = :selectedTypeID;

-- Update a recipe
UPDATE recipes SET recipeName = :recipeNameInput, ingredients = :ingredientsInput, instruction = :instructionInput, calorieCount = :calorieCountInput WHERE recipeID = :selectedRecipeID;

-- Update a meal plan
UPDATE mealPlans SET planName = :planNameInput WHERE planID = :selectedPlanID;

-- Update a user
UPDATE users SET userName = :userNameInput WHERE userID = :selectedUserID;

--Update a meal type
UPDATE mealTypes SET mealName = :planNameInput WHERE planID = :selectedPlanID;



