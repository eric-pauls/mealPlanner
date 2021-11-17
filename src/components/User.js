import React from 'react';


function User ({user}) {
    return (
        <tr>
            <td>{user.userID}</td>
            <td>{user.userName}</td>
        </tr>
    );
};

export default User