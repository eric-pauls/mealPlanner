import { Link } from "react-router-dom";
import RecipesTable from "../components/RecipesTable";
import { useState, useEffect } from 'react';

function ViewRecipes() {

    const [recipes, setRecipes] = useState([]);

    const loadRecipes = async () => {
        const response = await fetch('http://flip1.engr.oregonstate.edu:9604/recipes', {
            headers : { 
              'Content-Type': 'application/json',
              'Accept': 'application/json'
             }});
        
        const data = await response.json();

        if (response.ok) {
            setRecipes(data);
        }
        else {
            console.error(`Could not fetch, status code = ${response.status}`)
        }
    };

    useEffect(() => {
        loadRecipes();
    }, []);

    return (
        <div>
            <RecipesTable recipes={recipes}></RecipesTable>
            <Link to="/">Return to Homepage</Link>
        </div>
    )
}

export default ViewRecipes