import { Link } from "react-router-dom";

function ViewMealTypes() {

    return (
        <div>
            <h2>View Meal Types Table</h2>
            <table>
                <thead>
                    <tr>
                        <th>typeID</th>
                        <th>mealName</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Breakfast</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Lunch</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Dinner</td>
                    </tr>
                </tbody>
            </table>
            <Link to="/">Return to Homepage</Link>
        </div>
    )
}

export default ViewMealTypes