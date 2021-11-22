import { Link } from "react-router-dom";
import MealPlansTable from "../components/MealPlansTable";
import { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";


function ViewMealPlans({setMealPlanToEdit, deletePlan}) {

    const [mealPlans, setMealPlans] = useState([]);

    const history = useHistory();

    const getMealPlans = async () => {
        const response = await fetch('http://flip1.engr.oregonstate.edu:9604/mealplans');
        
        const data = await response.json();

        if (response.ok) {
            setMealPlans(data);
        }
        else {
            console.error(`Could not fetch, status code = ${response.status}`)
        }
    };

    const editPlan = mealPlan => {
        setMealPlanToEdit(mealPlan)
        history.push('/EditMealPlan')
      };


    useEffect(() => {
        getMealPlans();
    }, []);
    
    return (
        <div>
            <MealPlansTable mealPlans={mealPlans} editPlan={editPlan} deletePlan={deletePlan} />
            <Link to="/">Return to Homepage</Link>
        </div>
    )
}

export default ViewMealPlans