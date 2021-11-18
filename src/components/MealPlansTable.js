import React from 'react';
import MealPlan from './MealPlan';

function MealPlansTable({mealPlans, editPlan}) {
    return (
        <div>
            <h2>Meal Plans Table</h2>
        <table>
            <thead>
                    <tr>
                        <th>planID</th>
                        <th>planName</th>
                        <th>userID</th>
                        <th>Edit/View</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {mealPlans.map((mealPlan, i) => <MealPlan
                        mealPlan={mealPlan}
                        editPlan={editPlan}
                        key={i} />)}
                </tbody>
        </table>
        </div>
    );
};

export default MealPlansTable