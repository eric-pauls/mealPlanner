import React from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useState, useEffect } from 'react';
import UserDropdown from "../components/UserDropdown";
import MealPlansTable from "../components/MealPlansTable";

function HomePage({ setMealPlanToEdit, deletePlan }) {


  const [userID, setUserID] = useState(null);
  const [mealPlans, setMealPlans] = useState([]);
  const [filteredMealPlans, setFilteredMealPlans] = useState([]);
  const history = useHistory();

  const getMealPlans = async () => {
    const response = await fetch(`http://flip1.engr.oregonstate.edu:9604/mealplans`);

    const data = await response.json();

        if (response.ok) {
            setMealPlans(data);
            setFilteredMealPlans(data);
        }
        else {
            console.error(`Could not fetch, status code = ${response.status}`)
        }
  }

  const filterMealPlans = () => {
    const filter = mealPlans.filter(mealPlan => mealPlan.userID === Number(userID));
    setFilteredMealPlans(filter);
    console.log(mealPlans);
    console.log(userID);
    console.log(filter);
  };

  const editPlan = mealPlan => {
    setMealPlanToEdit(mealPlan)
    history.push('/EditMealPlan')
  };

  useEffect(() => {
    getMealPlans();
}, []);

  return (
    <div>

      <h1>Home: Your Meal Plans</h1>
        <UserDropdown userID={userID} onUserChange={setUserID} />
        <button onClick={() => filterMealPlans()}>View Meal Plans</button>
        <br />
        <MealPlansTable mealPlans={filteredMealPlans} editPlan={editPlan} deletePlan={deletePlan}/>
      

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
      <Link to="/ViewUsers">Add and View Users</Link>
    </div>)
}

export default HomePage;
