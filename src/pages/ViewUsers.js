import { Link } from "react-router-dom";

function ViewUsers() {

    return (
        <div>
            <h2>View User Table</h2>
            <table>
                <thead>
                    <tr>
                        <th>userID</th>
                        <th>userName</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>RonBurgundy</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>RonSwanson</td>
                    </tr>
                </tbody>
            </table>
            <Link to="/">Return to Homepage</Link>
        </div>
    )
}

export default ViewUsers