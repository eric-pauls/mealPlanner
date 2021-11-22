import React from 'react';
import Recipe from './Recipe'

function RecipesTable({recipes, onEdit, deleteRecipe}) {
    return (
        <div>
            <h2>Recipes Table</h2>
        <table>
            <thead>
                    <tr>
                        <th>recipeID</th>
                        <th>recipeName</th>
                        <th>ingredients</th>
                        <th>instruction</th>
                        <th>calorieCount</th>
                        <th>typeID</th>
                        <th>userID</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {recipes.map((recipe, i) => <Recipe
                        recipe={recipe}
                        onEdit={onEdit}
                        deleteRecipe={deleteRecipe}
                        key={i} />)}
                </tbody>
        </table>
        </div>
    );
};

export default RecipesTable