import { Link } from "react-router-dom";
import RecipesTable from "../components/RecipesTable";
import { useState, useEffect } from 'react';

function ViewRecipes() {

    const [recipes, setRecipes] = useState([]);

    const getRecipes = async () => {
        const response = await fetch('http://flip1.engr.oregonstate.edu:9604/recipes');
        
        const data = await response.json();

        if (response.ok) {
            setRecipes(data);
        }
        else {
            console.error(`Could not fetch, status code = ${response.status}`)
        }
    };

    useEffect(() => {
        getRecipes();
    }, []);

    return (
        <div>
            <RecipesTable recipes={recipes}></RecipesTable>
            <Link to="/">Return to Homepage</Link>
        </div>
    )
}

export default ViewRecipes