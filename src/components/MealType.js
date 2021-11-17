import React from 'react';


function MealType ({mealType}) {
    return (
        <tr>
            <td>{mealType.typeID}</td>
            <td>{mealType.mealName}</td>
        </tr>
    )
}

export default MealType