import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import UserDropdown from "../components/UserDropdown";

function EditMealPlanName({ planNameToEdit, planIDToEdit }) {
    
    const storedName = localStorage.getItem('savedName');
    const storedID = Number(localStorage.getItem('savedID'));
    const [planName, setPlanName] = useState(planNameToEdit ? planNameToEdit : storedName);
    const [planID, setPlanID] = useState(planIDToEdit ? planIDToEdit : storedID);
    
    useEffect(() => {
        if (planIDToEdit !== undefined) {
          localStorage.setItem('savedID', planIDToEdit);
        }
      }, [planIDToEdit]);
      useEffect(() => {
        if (planNameToEdit !== undefined) {
          localStorage.setItem('savedName', planNameToEdit);
        }
      }, [planNameToEdit]);

    const history = useHistory();

    const editMealPlan = async e => {
        e.preventDefault();
        const newMealPlan = { planName }

        const response = await fetch(`http://flip1.engr.oregonstate.edu:9604/mealplans/${planID}`, {
            method: 'PUT',
            body: JSON.stringify(newMealPlan),
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                history.push('/ViewMealPlans')
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <form>
                <h1>Edit Meal Plan Name</h1>
                <div>
                    <label>Plan Name:</label>
                    <input type="text"
                        placeholder='Enter the Meal Plan Name'
                        onChange={e => setPlanName(e.target.value)} />
                </div>
                <button onClick={e => editMealPlan(e)}>Save Meal Plan</button>
            </form>
            <Link to="/">Return Home</Link>
        </div>
    );

};


export default EditMealPlanName;