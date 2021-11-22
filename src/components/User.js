import React from 'react';


function User ({user, onEdit}) {
    return (
        <tr>
            <td>{user.userID}</td>
            <td>{user.userName}</td>
            <td><button onClick={() => onEdit(user)}>Edit</button></td>
            <td><button>Delete</button></td>
        </tr>
    );
};

export default User