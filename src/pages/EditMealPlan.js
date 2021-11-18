import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import RecipesMealPlansTable from "../components/RecipesMealPlansTable";

function EditMealPlan({ mealPlanToEdit }) {

  const [mealPlanName, setMealPlanName] = useState(mealPlanToEdit.planName);
  
  return (
    <div>
      <h1>{mealPlanName}</h1>
      <h4></h4>
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
      
    </div>
  );
}

export default EditMealPlan;
