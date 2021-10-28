import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

function CreateRecipe() {
  const history = useHistory();

  const goHome = () => {
    history.push("/HomePage");
  };

  return (
    <div>
      <form>
        <h1>Create Recipe</h1>
        <div>
          <label for="recipeName">Recipe Name:</label>
          <input type="text" />
        </div>
        <div>
          <label for="ingredients">Ingredients:</label>
          <textarea></textarea>
        </div>
        <div>
          <label for="instructions">Instructions:</label>
          <textarea></textarea>
        </div>
        <div>
          <label for="calorieCount">Calories:</label>
          <input type="text" />
        </div>
        <label for='breakfast'>Breakfast</label>
        <input type='checkbox' name='breakfast'></input>
        <label for='lunch'>Lunch</label>
        <input type='checkbox' name='lunch'></input>
        <label for='dinner'>Dinner</label>
        <input type='checkbox' name='dinner'></input>
        <br />
        <button onClick={goHome}> Save Recipe</button>
      </form>
      <Link to="/HomePage">Cancel</Link>
      <br />
      <h2>View Recipes Table</h2>
      <table>
        <thead>
          <tr>
            <th>recipeID</th>
            <th>recipeName</th>
            <th>ingredients</th>
            <th>instruction</th>
            <th>calorieCount</th>
            <th>userID</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Pancakes</td>
            <td>flour, milk, butter</td>
            <td>1. mix batter
              2. cook on stove
            </td>
            <td>600</td>
            <td>1</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Cheeseburger</td>
            <td>ground beef, cheese</td>
            <td>1. make patty
              2. grill
            </td>
            <td>800</td>
            <td>1</td>
          </tr>
        </tbody>
      </table>

      <h2>View Meal Types Table</h2>
      <table>
        <thead>
          <tr>
            <th>typeID</th>
            <th>mealName</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Breakfast</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Lunch</td> 
          </tr>
          <tr>
            <td>3</td>
            <td>Dinner</td>
          </tr>
        </tbody>
      </table>

      <h2>View Recipes/Meal Types Table</h2>
      <table>
        <thead>
          <tr>
            <th>typeID</th>
            <th>recipeID</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>1</td>
          </tr>
          <tr>
            <td>2</td>
            <td>2</td> 
          </tr>
          <tr>
            <td>2</td>
            <td>3</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default CreateRecipe;
