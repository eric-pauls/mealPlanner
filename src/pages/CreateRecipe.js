import React from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useState, useEffect } from 'react';
import UserDropdown from '../components/UserDropdown';

function CreateRecipe() {

  const [recipe, setRecipe] = useState('');
  const [recipeName, setRecipeName] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instruction, setInstruction] = useState('');
  const [calorieCount, setCalorieCount] = useState(0);
  const [userID, setUserID] = useState(0);

  const history = useHistory();

  const addRecipe = async () => {
    console.log('check check')
    const newRecipe = {recipeName, ingredients, instruction, calorieCount, userID}
    const response = await fetch('/recipes', {
      method: 'POST',
      body: newRecipe,
      headers: {
          'Content-Type': 'application/json',
      },
  });
  if (response.status === 201) {
    
  } else {
      alert(`Failed to add recipe, status code = ${response.status}. Make sure all required fields are filled out.`);
  }
  history.push('/ViewRecipes')
  }

  const goHome = () => {
    history.push("/");
  };

  return (
    <div>
      <form>
        <h1>Create Recipe</h1>
        <div>
          <UserDropdown userID={userID} onUserChange={setUserID}/>
          <br />
          <label>Recipe Name:</label>
          <input type="text" onChange={setRecipeName} />
        </div>
        <div>
          <label>Ingredients:</label>
          <textarea onChange={setIngredients}></textarea>
        </div>
        <div>
          <label>Instructions:</label>
          <textarea onChange={setInstruction}></textarea>
        </div>
        <div>
          <label>Calories:</label>
          <input type="text" onChange={setCalorieCount}/>
        </div>
        <label>Breakfast</label>
        <input type='checkbox' name='breakfast'></input>
        <label>Lunch</label>
        <input type='checkbox' name='lunch'></input>
        <label>Dinner</label>
        <input type='checkbox' name='dinner'></input>
        <br />
        <button onClick={addRecipe}> Save Recipe</button>
      </form>
      <Link to="/">Cancel</Link>
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
    </div>
  );
}

export default CreateRecipe;
