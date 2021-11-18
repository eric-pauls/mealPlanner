import React from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useState, useEffect } from 'react';
import UserDropdown from "../components/UserDropdown";
import MealPlansTable from "../components/MealPlansTable";

function HomePage({ mealPlanToEdit, setMealPlanToEdit}) {


  const [userID, setUserID] = useState(null);
  const [mealPlans, setMealPlans] = useState([]);
  const history = useHistory();

  const getMealPlansByUser = async userID => {
    const response = await fetch(`http://flip1.engr.oregonstate.edu:9604/mealplans/${userID}`);

    const data = await response.json();

        if (response.ok) {
            setMealPlans(data);
        }
        else {
            console.error(`Could not fetch, status code = ${response.status}`)
        }
  }

  const editPlan = mealPlan => {
    setMealPlanToEdit(mealPlan)
    history.push('/EditMealPlan')
  };

  return (
    <div>
      <Link to="/LoginPage">Login To Your Account</Link>
      <br />
      <Link to="/CreateUser">Create New User Account</Link>
      <br />

      
      <h1>Home: Your Meal Plans</h1>
        <UserDropdown userID={userID} onUserChange={setUserID} />
        <button onClick={() => getMealPlansByUser(userID)}>View Meal Plans</button>
        <br />
        <MealPlansTable mealPlans={mealPlans} editPlan={editPlan} />
      

      <Link to="/CreateRecipe">Create New Recipe</Link>
      <br />
      <Link to="/CreateMealPlan">Create New Meal Plan</Link>
      <br />
      <Link to="/ViewMealPlans">View Meal Plans</Link>
      <br />
      <Link to="/ViewRecipes">View Recipes</Link>
      <br />
      <Link to="/ViewMealTypes">View Meal Types</Link>
      <br />
      <Link to="/ViewUsers">View Users</Link>
    </div>)
}

export default HomePage;
