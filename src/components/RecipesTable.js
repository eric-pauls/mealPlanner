import React from 'react';
import Recipe from './Recipe'

function RecipesTable({recipes}) {
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
                    </tr>
                </thead>
                <tbody>
                    {recipes.map((recipe, i) => <Recipe
                        recipe={recipe}
                        key={i} />)}
                </tbody>
        </table>
        </div>
    );
};

export default RecipesTable