import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

function CreateUser() {
  const history = useHistory();

  const [userName, setUserName] = useState('');

  const addUser = async () => {
    const newUser = { userName }
    const response = await fetch('http://flip1.engr.oregonstate.edu:9604/users', {
      method: 'POST',
      body: JSON.stringify(newUser),
      headers: {
        'Content-Type': 'application/json'
      },
    });
    if (response.status === 201) {

    } else {
      alert(`Failed to add user, status code = ${response.status}. Make sure all required fields are filled out.`);
    };
    history.push('/ViewUsers');
  }




return (
  <div>
    <form>
      <h1>Create User</h1>
      <div>
        <label for="userName">Username:</label>
        <input type="text"
          placeholder='Enter Your New User Name'
          onChange={e => setUserName(e.target.value)} />
      </div>  
      <button onClick={addUser}>Create User</button>
    </form>
    <Link to="/LoginPage">Go to Login</Link>
    <br />
    <Link to="/">Return to Homepage</Link>
  </div>
);
}

export default CreateUser;
