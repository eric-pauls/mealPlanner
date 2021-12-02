import React from 'react';
import {useState, useEffect, useCallback} from 'react';



function MealTypeFilter({typeID, setTypeID, recipeSearch}) {

    const [mealTypes, setMealTypes] = useState([]);

    const getMealTypes = async () => {
        await fetch('http://flip1.engr.oregonstate.edu:9604/mealTypes')
            .then((response) => response.json())
            .then((data) => setMealTypes(data));
        
    };


    useEffect(() => {
        getMealTypes();
    }, []);

    const changeMealType = useCallback(

        e => {
            setTypeID(e.target.value)
        },
        [setTypeID]
    );

    const mapping = () => {
        if (mealTypes !== null) {
            return mealTypes.map((mealType) => (
                <button  class='btn btn-outline-dark' onClick={()=>recipeSearch(mealType.typeID)}>{mealType.mealName}</button>
            ));
        };
    };

    return (
        <div>
            <label>Filter Recipes by Meal Type: </label>
            {mapping()}
            
            <button class='btn btn-outline-dark' onClick={()=>recipeSearch('null')}>All Recipes</button>
        </div>
    )
}

export default MealTypeFilter