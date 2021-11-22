import React from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useState, useEffect } from 'react';
import UserDropdown from '../components/UserDropdown';
import MealTypesRadio from "../components/MealTypesRadio";

function CreateRecipe() {

  const [recipeName, setRecipeName] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instruction, setInstruction] = useState('');
  const [calorieCount, setCalorieCount] = useState(0);
  const [userID, setUserID] = useState(null);
  const [typeID, setTypeID] = useState(null);

  const history = useHistory();

  const addRecipe = async e => {
    e.preventDefault();
    const newRecipe = { recipeName, ingredients, instruction, calorieCount, typeID, userID }
    if (userID !== null) {
      const response = await fetch('http://flip1.engr.oregonstate.edu:9604/recipes', {
        method: 'POST',
        body: JSON.stringify(newRecipe),
        headers: {
          'Content-Type': 'application/json'
        },
      })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(err => console.log(err))
      history.push('/ViewRecipes')
    }
    else {
      alert('Please select a user.')
    }
  }

  return (
    <div>
      <form>
        <h1>Create Recipe</h1>
        <div>
          <UserDropdown userID={userID} onUserChange={setUserID} />
          <br />
          <label>Recipe Name:</label>
          <input type="text"
            placeholder='Enter Recipe Name'
            onChange={e => setRecipeName(e.target.value)} />
        </div>
        <div>
          <label>Ingredients:</label>
          <textarea value={ingredients}
            placeholder='Enter Ingredients'
            onChange={e => setIngredients(e.target.value)}></textarea>
        </div>
        <div>
          <label>Instructions:</label>
          <textarea value={instruction}
            placeholder='Enter Instructions'
            onChange={e => setInstruction(e.target.value)}></textarea>
        </div>
        <div>
          <label>Calories:</label>
          <input type="text"  
            placeholder='Enter Calorie Count'
            onChange={e => setCalorieCount(e.target.value)} />
        </div>
        <MealTypesRadio typeID={typeID} onMealTypeChange={setTypeID}/>
        <button onClick={e => addRecipe(e)}>Save Recipe</button>
      </form>
      <Link to="/">Cancel</Link>
    </div>
  );
}

export default CreateRecipe;
