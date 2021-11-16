import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

function CreateMealPlan() {
  const history = useHistory();

  const goToEdit = () => {
    history.push("/EditMealPlan");
  };

  return (
    <div>
      <form>
        <h1>Create Meal Plan</h1>
        <div>
          <label for="name">Name:</label>
          <input type="text" />
        </div>
        <button onClick={goToEdit}> Create Meal Plan</button>
      </form>
      <Link to="/">Return Home</Link>
      <br />
      <h2>View Meal Plan Table</h2>
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
    </div>
  );
}

export default CreateMealPlan;
