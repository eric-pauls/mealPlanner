import React from 'react';


function Recipe ({recipe}) {
    return (
        <tr>
            <td>{recipe.recipeID}</td>
            <td>{recipe.recipeName}</td>
            <td>{recipe.ingredients}</td>
            <td>{recipe.instruction}</td>
            <td>{recipe.calorieCount}</td>
            <td>{recipe.typeID}</td>
            <td>{recipe.userID}</td>
        </tr>
    )
}

export default Recipe