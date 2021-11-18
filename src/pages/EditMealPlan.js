import React from "react";
import { Link } from "react-router-dom";
import RecipesMealPlansTable from "../components/RecipesMealPlansTable";

function EditMealPlan() {
  return (
    <div>
      <h1>My Meal Plan</h1>
      <h4>Diet Over</h4>
      <table>
        <thead>
          <tr>
            <th>Meal</th>
            <th>Sunday</th>
            <th>Monday</th>
            <th>Tuesday</th>
            <th>Wednesday</th>
            <th>Thursday</th>
            <th>Friday</th>
            <th>Saturday</th>
          </tr>
        </thead>
        <RecipesMealPlansTable />
      </table>
      <h2>Add Meal to Meal Plan</h2>
      <label>Choose Recipe</label>
      <select id="dropdown">
        <option value="">--Select one--</option>
        <option>Pancakes</option>
        <option>Cheese Burger</option>
        <option>Salad</option>
        <option>Pasta</option>
      </select>
      <br />
      <label>Choose Day</label>
      <select id="dropdown">
        <option value="">--Select one--</option>
        <option value="sunday">Sunday</option>
        <option value="monday">Monday</option>
        <option value="tuesday">Tuesday</option>
        <option value="wednesday">Wednesday</option>
        <option value="thursday">Thursday</option>
        <option value="friday">Friday</option>
        <option value="saturday">Saturday</option>
      </select>
      <br />

      <label>Choose Meal</label>
      <select id="dropdown">
        <option value="">--Select one--</option>
        <option>Breakfast</option>
        <option>Lunch</option>
        <option>Dinner</option>
      </select>
      <br />
      <button>Update Meal Plan</button>
      <br />

      <Link to="/">Return Home</Link>
      
      <h2>View Meal Plans Table</h2>
      <table>
        <thead>
          <tr>
            <th>planID</th>
            <th>planName</th>
            <th>userID</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Health Mode</td>
            <td>1</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Diet Over</td>
            <td>1</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Average Meal</td>
            <td>1</td>
          </tr>
        </tbody>
      </table>

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

      <h2>View Recipes/Meal Plans Table</h2>
      <table>
        <thead>
          <tr>
            <th>recipeID</th>
            <th>planID</th>
            <th>day</th>
            <th>assignedMeal</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>1</td>
            <td>Monday</td>
            <td>Breakfast
            </td>
          </tr>
          <tr>
            <td>1</td>
            <td>2</td>
            <td>Monday</td>
            <td>Dinner</td>
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

export default EditMealPlan;
