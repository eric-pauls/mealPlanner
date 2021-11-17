import React from 'react';
import MealPlan from './MealPlan';

function MealPlansTable({mealPlans}) {
    return (
        <div>
            <h2>Meal Plans Table</h2>
        <table>
            <thead>
                    <tr>
                        <th>planID</th>
                        <th>planName</th>
                        <th>userID</th>
                    </tr>
                </thead>
                <tbody>
                    {mealPlans.map((mealPlan, i) => <MealPlan
                        mealPlan={mealPlan}
                        key={i} />)}
                </tbody>
        </table>
        </div>
    );
};

export default MealPlansTable