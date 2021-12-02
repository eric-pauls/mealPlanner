import React from 'react';
import {useState, useEffect, useCallback} from 'react';



function MealTypeDropdown({typeID, setTypeID, recipeSearch}) {

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
                <option key = {mealType.typeID} value={mealType.typeID}>{mealType.mealName}</option>
            ));
        };
    };

    return (
        <div>
            <label>Search Recipes by Meal Type: </label>
            <select onChange={changeMealType} val={typeID}>
                <option value='null'>All Meals</option>
                {mapping()}
            </select>
            <button onClick={()=>recipeSearch()}>Search</button>
        </div>
    )
}

export default MealTypeDropdown