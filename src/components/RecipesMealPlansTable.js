import React from 'react';
import { useState, useEffect} from 'react';


function RecipesMealPlansTable({ planID }) {

    const [mealTypes, setMealTypes] = useState([]);
    const [recipeMealPlans, setRecipeMealPlans] = useState([]);
    const [recipes, setRecipes] = useState([]);
    const [recipeID, setRecipeID] = useState();


    const getRecipeMealPlans = async planID => {
        const response = await fetch(`http://flip1.engr.oregonstate.edu:9604/recipesmealplans/${planID}`);
        
        const data = await response.json();

        if (response.ok) {
            setRecipeMealPlans(data);
        }
        else {
            console.error(`Could not fetch, status code = ${response.status}`)
        }
    };

    const getRecipes = async () => {
        const response = await fetch(`http://flip1.engr.oregonstate.edu:9604/recipes`);
        
        const data = await response.json();

        if (response.ok) {
            setRecipes(data);
        }
        else {
            console.error(`Could not fetch, status code = ${response.status}`)
        }
    }; 

    useEffect(() => {
        getRecipeMealPlans(1);
    }, []);

    useEffect(() => {
        getRecipes();
    }, []);

    const mealEntries = meal => {
        
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

        const filteredEntries = recipeMealPlans.filter((recipe) => recipe.assignedMeal === meal)
        
        return(
            filteredEntries.map((recipe) => (
            <td>{recipe.recipeID}</td>))
        )

    }


    return (
        <tbody>
            <tr><td>Breakfast</td>{mealEntries('Breakfast')}</tr>
            <tr><td>Lunch</td>{mealEntries('Lunch')}</tr>
            <tr><td>Dinner</td>{mealEntries('Dinner')}</tr>
        </tbody>
    )

    
}

export default RecipesMealPlansTable