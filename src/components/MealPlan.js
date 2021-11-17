import React from 'react';


function MealPlan ({mealPlan}) {
    return (
        <tr>
            <td>{mealPlan.planID}</td>
            <td>{mealPlan.planName}</td>
            <td>{mealPlan.userID}</td>
        </tr>
    )
}

export default MealPlan