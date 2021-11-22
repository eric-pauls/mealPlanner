import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';



function EditUser({userToEdit}) {

    
    const [userName, setUserName] = useState(userToEdit.userName);

    const history = useHistory();

    const changeUser = async e => {
        e.preventDefault();
        const editedUser = {userName};
        const response = await fetch(`http://flip1.engr.oregonstate.edu:9604/users/${userToEdit.userID}`, {
            method: 'PUT',
            body: JSON.stringify(editedUser),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(data => {
                history.push('/ViewUsers')})
            .catch(err => console.log(err))
    
    };


    return (
        <div>
    <form>
      <h1>Edit User: {userToEdit.userName}</h1>
      <div>
        <label>Username:</label>
        <input type="text"
          placeholder='Enter Your New User Name'
          onChange={e => setUserName(e.target.value)} />
      </div>  
      <button onClick={e => changeUser(e)}>Edit User</button>
    </form>
    <Link to="/ViewUsers">View Users</Link>
    <br />
    <Link to="/">Return to Homepage</Link>
  </div>
    )
};

export default EditUser