import React from 'react';


function Recipe ({recipe, onEdit, deleteRecipe}) {
    return (
        <tr>
            <td>{recipe.recipeID}</td>
            <td>{recipe.recipeName}</td>
            <td>{recipe.ingredients}</td>
            <td>{recipe.instruction}</td>
            <td>{recipe.calorieCount}</td>
            <td>{recipe.typeID}</td>
            <td>{recipe.userID}</td>
            <td><button onClick={() => onEdit(recipe)}>Edit</button></td>
            <td><button onClick={() => deleteRecipe(recipe.recipeID)}>Delete</button></td>
        </tr>
    )
}

export default Recipe