import { Link } from "react-router-dom";
import MealPlansTable from "../components/MealPlansTable";
import { useState, useEffect } from 'react';


function ViewMealPlans() {

    const [mealPlans, setMealPlans] = useState([]);

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

    useEffect(() => {
        getMealPlans();
    }, []);
    
    return (
        <div>
            <MealPlansTable mealPlans={mealPlans} />
            <Link to="/">Return to Homepage</Link>
        </div>
    )
}

export default ViewMealPlans