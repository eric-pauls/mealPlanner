import React from 'react';
import User from './User';

function UsersTable({users, onEdit}) {
    return (
        <div>
            <h2>Users Table</h2>
        <table>
            <thead>
                    <tr>
                        <th>userID</th>
                        <th>userName</th>
                        <th>Edit User</th>
                        <th>Delete User</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, i) => <User
                        user={user}
                        onEdit={onEdit}
                        key={i} />)}
                </tbody>
        </table>
        </div>
    );
};

export default UsersTable