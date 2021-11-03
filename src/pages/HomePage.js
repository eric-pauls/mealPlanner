import React from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

function HomePage() {

  const history = useHistory();

  const editPlan = () => {
    history.push("/EditMealPlan");
  };

  return (
    <div>
      <h1>Home: Your Meal Plan</h1>
      <label>Choose Meal Plan</label>
      <select id="dropdown">
        <option value="">--Select one--</option>
        <option value="healthy">Health Mode</option>
        <option value="dietOver">Diet Over</option>
        <option value="mix">Average Meal</option>
      </select>
      <button onClick={editPlan}>Edit Meal Plan</button>
      <button>Delete Meal Plan</button>
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
        <tbody>
          <tr>
            <td>
              Breakfast <br /> Lunch <br /> Dinner
            </td>
            <td>
              <Link to="/DisplayRecipePage">Pancakes</Link> <br /> Chilli <br />{" "}
              Cheeseburger
            </td>
            <td>
              French Toast <br /> Salad <br /> Chicken Pasta
            </td>
            <td>
              Bagel <br /> PBJ <br /> StiryFry
            </td>
            <td>
              Cereal <br /> Chicken Wrap <br /> Soup!
            </td>
            <td>
              {" "}
              Pancakes <br /> Turkey Sandwich <br /> Steak and Potatoes
            </td>
            <td>
              Oatmeal
              <br /> PBJ <br /> Cheeseburger
            </td>
            <td>
              Pancakes <br /> Salad <br /> Chicken Pasta
            </td>
          </tr>
        </tbody>
      </table>
      <Link to="/CreateRecipe">Create New Recipe</Link>
      <br />
      <Link to="/CreateMealPlan">Create New Meal Plan</Link>
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

export default HomePage;
