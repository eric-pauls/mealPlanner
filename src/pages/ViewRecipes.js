import { Link } from "react-router-dom";

function ViewRecipes() {

    return (
        <div>
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
            <Link to="/">Return to Homepage</Link>
        </div>
    )
}

export default ViewRecipes