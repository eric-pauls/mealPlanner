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
    </div>
  );
}

export default CreateMealPlan;
