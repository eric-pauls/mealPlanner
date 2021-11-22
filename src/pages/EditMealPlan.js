import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import RecipesMealPlansTable from "../components/RecipesMealPlansTable";
import RecipeDropdown from "../components/RecipeDropdown";

function EditMealPlan({ mealPlanToEdit }) {

  const storedName = localStorage.getItem('savedName');
  const storedID = Number(localStorage.getItem('savedID'));
  const [mealPlanName, setMealPlanName] = useState(mealPlanToEdit ? mealPlanToEdit.planName : storedName)
  const [planID, setPlanID] = useState(mealPlanToEdit ? mealPlanToEdit.planID : storedID);
  const [recipeID, setRecipeID] = useState(null);
  const [day, setDay] = useState(null);
  const [assignedMeal, setAssignedMeal] = useState(null);

  useEffect(() => {
    if (mealPlanToEdit !== undefined) {
      localStorage.setItem('savedID', mealPlanToEdit.planID);
    }
  }, [mealPlanToEdit]);
  useEffect(() => {
    if (mealPlanToEdit !== undefined) {
      localStorage.setItem('savedName', mealPlanToEdit.planName);
    }
  }, [mealPlanToEdit]);



  const addRecipeToMealPlan = async () => {

    setMealPlanName(localStorage.getItem('savedName'));
    setPlanID(localStorage.getItem('savedID'));
    const newAssignment = { recipeID, planID, day, assignedMeal }
    if (recipeID !== null && day !== null && assignedMeal !== null) {
      const response = await fetch('http://flip1.engr.oregonstate.edu:9604/recipesmealplans', {
        method: 'POST',
        body: JSON.stringify(newAssignment),
        headers: {
          'Content-Type': 'application/json'
        },
      });
      if (response.status === 201) {

      } else {
        alert(`Failed to add recipe to meal plan, status code = ${response.status}. Make sure all required fields are filled out.`);
      };
      window.location.reload(false);
    }
    else {
      alert('Please fill out all required fields before submitting.')
    }
  };

  return (
    <div>
      <h1>My Meal Plan</h1>
      <h4>{mealPlanName}</h4>
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
        <RecipesMealPlansTable planID={planID} />
      </table>
      <h2>Add Meal to Meal Plan</h2>
      <RecipeDropdown recipeID={recipeID} onRecipeChange={setRecipeID} />
      <br />
      <label>Choose Day</label>
      <select onChange={e => setDay(e.target.value)}>
        <option value="">--Select one--</option>
        <option value="Sunday">Sunday</option>
        <option value="Monday">Monday</option>
        <option value="Tuesday">Tuesday</option>
        <option value="Wednesday">Wednesday</option>
        <option value="Thursday">Thursday</option>
        <option value="Friday">Friday</option>
        <option value="Saturday">Saturday</option>
      </select>
      <br />

      <label>Choose Meal</label>
      <select onChange={e => setAssignedMeal(e.target.value)}>
        <option value="">--Select one--</option>
        <option value="Breakfast">Breakfast</option>
        <option value="Lunch">Lunch</option>
        <option value="Dinner">Dinner</option>
      </select>
      <br />
      <button onClick={() => addRecipeToMealPlan()}>Update Meal Plan</button>
      <br />

      <Link to="/">Return Home</Link>

    </div>
  );
};

export default EditMealPlan;
