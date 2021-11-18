import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import UserDropdown from "../components/UserDropdown";

function CreateMealPlan() {

  const [userID, setUserID] = useState(null);
  const [planName, setPlanName] = useState('');

  const addMealPlan = async () => {
    const newMealPlan = { planName, userID }
    if (userID !== null) {
      const response = await fetch('http://flip1.engr.oregonstate.edu:9604/mealplans', {
        method: 'POST',
        body: JSON.stringify(newMealPlan),
        headers: {
          'Content-Type': 'application/json'
        },
      });
      if (response.status === 201) {

      } else {
        alert(`Failed to add meal plan, status code = ${response.status}. Make sure all required fields are filled out.`);
      };
      history.push('/ViewMealPlans');
    }
    else {
      alert('Please choose a User')
    }
  }

  const history = useHistory();

  const goToEdit = () => {
    history.push("/EditMealPlan");
  };

  return (
    <div>
      <form>
        <h1>Create Meal Plan</h1>
        <div>
          <UserDropdown userID={userID} onUserChange={setUserID} />
          <label>Plan Name:</label>
          <input type="text"
            placeholder='Enter the Meal Plan Name'
            onChange={e => setPlanName(e.target.value)} />
        </div>
        <button onClick={addMealPlan}> Create Meal Plan</button>
      </form>
      <Link to="/">Return Home</Link>
    </div>
  );
}

export default CreateMealPlan;
