import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';


function CreateRecipe() {
    const history = useHistory()

    const goHome = () => {
        history.push("/HomePage")
    }

    return (
        
        <div>
            <form>
                <h1>Create Recipe</h1>
                <div>
                    <label for="recipeName">Recipe Name:</label>
                    <input type="text"/>
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
                    <input type="text"/>
                </div>
                <select id="dropdown">
                    <option value="Breakfast">Breakfast</option>
                    <option value="Lunch">Lunch</option>
                    <option value="Dinner">Dinner</option>
                    <option value="Snack">Snack</option>
                </select><br/>
                <button onClick={goHome}> Save Recipe</button>
                
            </form>
            <Link to='/HomePage'>Cancel</Link><br/>
        </div>
    )
}

export default CreateRecipe