import { Link } from "react-router-dom";
import RecipesTable from "../components/RecipesTable";
import { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";

function ViewRecipes({setRecipeToEdit}) {

    const [recipes, setRecipes] = useState([]);

    const history = useHistory();

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

    const deleteRecipe = async recipeID => {
        const response = await fetch(`http://flip1.engr.oregonstate.edu:9604/recipes/${recipeID}`, {method: 'DELETE'});
        if (response.status === 204) {
            window.location.reload(false);
        }
        else {
            console.error(`Failed to delete recipe with recipeID = ${recipeID}, status code = ${response.status}`)
        }
    };

    const onEdit = recipe => {
        setRecipeToEdit(recipe);
        history.push('/EditRecipe')
    };

    useEffect(() => {
        getRecipes();
    }, []);

    return (
        <div>
            <RecipesTable recipes={recipes} onEdit={onEdit} deleteRecipe={deleteRecipe}></RecipesTable>
            <Link to="/">Return to Homepage</Link>
        </div>
    )
}

export default ViewRecipes