import { Link } from "react-router-dom";

function ViewMealPlans() {

    return (
        <div>
            <h2>View Meal Plans Table</h2>
            <table>
                <thead>
                    <tr>
                        <th>planID</th>
                        <th>planName</th>
                        <th>userID</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Health Mode</td>
                        <td>1</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Diet Over</td>
                        <td>1</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Average Meal</td>
                        <td>1</td>
                    </tr>
                </tbody>
            </table>
            <Link to="/">Return to Homepage</Link>
        </div>
    )
}

export default ViewMealPlans