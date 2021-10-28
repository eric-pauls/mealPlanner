import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

function CreateUser() {
  const history = useHistory();

  const goHome = () => {
    history.push("/");
  };

  return (
    <div>
      <form>
        <h1>Create User</h1>
        <div>
          <label for="userName">Username:</label>
          <input type="text" />
        </div>
        <button onClick={goHome}> Create User</button>
      </form>
      <Link to="/">Return to Login</Link>
      <br />
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
    </div>
  );
}

export default CreateUser;
