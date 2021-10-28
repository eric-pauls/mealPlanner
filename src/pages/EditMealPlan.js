import React from 'react';
import { Link } from 'react-router-dom';

function EditMealPlan() {
    return (
        <div>
            <h1>My Meal Plan</h1>
            <h2>Edit Meal Plan</h2>
            <h4>Name:</h4>
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
        <label>Choose Recipe</label>
            <select id="dropdown">
                <option value="">--Select one--</option>
                <option>Pancakes</option>
                <option>Cheese Burger</option>
                <option>Salad</option>
                <option>Pasta</option>
            </select><br/>
        <label>Choose Day</label>
            <select id="dropdown">
                <option value="">--Select one--</option>
                <option value="sunday">Sunday</option>
                <option value="monday">Monday</option>
                <option value="tuesday">Tuesday</option>
                <option value="wednesday">Wednesday</option>
                <option value="thursday">Thursday</option>
                <option value="friday">Friday</option>
                <option value="saturday">Saturday</option>
                </select><br/>
        
        <label>Choose Meal</label>
        <select id="dropdown">
            <option value="">--Select one--</option>
            <option>Breakfast</option>
            <option>Lunch</option>
            <option>Dinner</option>
        </select><br/>

        <Link to="/HomePage">Return Home</Link>
    </div>
    )
}

export default EditMealPlan