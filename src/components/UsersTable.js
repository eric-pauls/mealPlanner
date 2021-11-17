import React from 'react';
import User from './User';

function UsersTable({users}) {
    return (
        <div>
            <h2>Users Table</h2>
        <table>
            <thead>
                    <tr>
                        <th>userID</th>
                        <th>userName</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, i) => <User
                        user={user}
                        key={i} />)}
                </tbody>
        </table>
        </div>
    );
};

export default UsersTable