import React from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useState, useEffect } from 'react';
import UserDropdown from "../components/UserDropdown";
import MealPlansTable from "../components/MealPlansTable";

function HomePage({ setMealPlanToEdit, deletePlan }) {


  const [userID, setUserID] = useState(null);
  const [mealPlans, setMealPlans] = useState([]);
  const history = useHistory();

  const getMealPlans = async () => {
    const response = await fetch(`http://flip1.engr.oregonstate.edu:9604/mealplans`);

    const data = await response.json();

        if (response.ok) {
            setMealPlans(data);
        }
        else {
            console.error(`Could not fetch, status code = ${response.status}`)
        }
  }

  const filterMealPlans = userID => {
    const filteredMealPlans = mealPlans.filter((mealPlan) => mealPlan.userID === userID)
    return filteredMealPlans
  }

  const editPlan = mealPlan => {
    setMealPlanToEdit(mealPlan)
    history.push('/EditMealPlan')
  };

  useEffect(() => {
    getMealPlans();
}, []);

  return (
    <div>
      <Link to="/CreateUser">Create New User Account</Link>
      <br />


      <h1>Home: Your Meal Plans</h1>
        <UserDropdown userID={userID} onUserChange={setUserID} />
        <button onClick={() => filterMealPlans(userID)}>View Meal Plans</button>
        <br />
        <MealPlansTable mealPlans={mealPlans} editPlan={editPlan} deletePlan={deletePlan}/>
      

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
