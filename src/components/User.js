import React from 'react';


function User ({user, onEdit, deleteUser}) {
    return (
        <tr>
            <td>{user.userID}</td>
            <td>{user.userName}</td>
            <td><button onClick={() => onEdit(user)}>Edit</button></td>
            <td><button onClick={() => deleteUser(user.userID)}>Delete</button></td>
        </tr>
    );
};

export default User