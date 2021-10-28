import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
    return (
        <div>
            <h1>Home: Your Meal Plan</h1>
            <label>Choose Meal Plan</label>
            <select id="dropdown">
            <option value="">--Select one--</option>
            <option value="healthy">health Mode</option>
            <option value="dietOver">Diet Over</option>
            <option value="mix">Average Meal</option>
            </select>
            <table>
        <thead>
            <tr>
            <th>Meal</th>
            <th>Sunday</th>
            <th>Monday</th>
            <th>Tuesday</th>
            <th>Wednesday</th>
            <th>Thursday</th>
            <th>Friday</th>
            <th>Saturday</th>
            </tr>
        </thead>
        <tbody>
        <tr>
            <td>Breakfast <br/> Lunch <br/> Dinner</td>
            <td><Link to="/DisplayRecipePage">Pancakes</Link> <br/> Chilli <br/> Cheeseburger</td>
            <td>French Toast <br/> Salad <br/> Chicken Pasta</td>
            <td>Bagel <br/> PBJ <br/> StiryFry</td>
            <td>Cereal <br/> Chicken Wrap <br/> Soup!</td>
            <td> Pancakes <br/> Turkey Sandwich <br/> Steak and Potatoes</td>
            <td>Oatmeal<br/> PBJ <br/> Cheeseburger</td>
            <td>Pancakes <br/> Salad <br/> Chicken Pasta</td>
            </tr>
            
        </tbody>
        </table>
        <Link to="/CreateRecipe">Create New Recipe</Link><br/>
        <Link to="/CreateMealPlan">Create New Meal Plan</Link>
    </div>
    )
}

export default HomePage