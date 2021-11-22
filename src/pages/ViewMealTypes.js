import { Link } from "react-router-dom";
import MealTypesTable from "../components/MealTypesTable";
import { useState, useEffect } from 'react';

function ViewMealTypes() {
    
    const [mealTypes, setMealTypes] = useState([]);

    const getMealTypes = async () => {
        const response = await fetch('http://flip1.engr.oregonstate.edu:9604/mealtypes');
        
        const data = await response.json();

        if (response.status === 200) {
            setMealTypes(data);
        }
        else {
            console.error(`Could not fetch, status code = ${response.status}`)
        }
    }; 

    useEffect(() => {
        getMealTypes();
    }, []);

    return (
        <div>
            <MealTypesTable mealTypes={mealTypes} />
            <Link to="/">Return to Homepage</Link>
        </div>
    )
}

export default ViewMealTypes