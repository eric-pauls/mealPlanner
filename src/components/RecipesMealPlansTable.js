import React from 'react';
import { useState, useEffect, useCallback} from 'react';


function RecipesMealPlansTable({ planID }) {

    const [recipeMealPlans, setRecipeMealPlans] = useState([]);
    const [recipes, setRecipes] = useState([]);

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
        getRecipeMealPlans(planID);
    }, []);

    useEffect(() => {
        getRecipes();
    }, []);

    const getRecipeByID = recipeID => {
        const filteredRecipe = recipes.filter((recipe) => recipe.recipeID === recipeID)
        const newRecipe = filteredRecipe[0]
        return newRecipe.recipeName
    }

    const mealEntries = meal => {
        
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
        let entryArr = []
        const filteredEntries = recipeMealPlans.filter((recipe) => recipe.assignedMeal === meal)
        console.log('hello')
        for (let day in days) {
            
            let filteredByDay = filteredEntries.filter((recipe) => recipe.day === days[day])
            
            if (filteredByDay.length !== 1) {
                entryArr.push(<td key={day}>No Meal</td>)  
            }
            else { 
                
                entryArr.push(<td key={day}>{getRecipeByID(filteredByDay[0].recipeID)}</td>)  
            };
        };

        return entryArr

    }

    if (recipes.length > 0 && recipeMealPlans.length > 0) {
    return (
        
        <tbody>
            <tr><td>Breakfast</td>{ mealEntries('Breakfast')}</tr>
            <tr><td>Lunch</td>{ mealEntries('Lunch')}</tr>
            <tr><td>Dinner</td>{ mealEntries('Dinner')}</tr>
        </tbody>
    )
    }
    else {
        return null
    }
    
}

export default RecipesMealPlansTable