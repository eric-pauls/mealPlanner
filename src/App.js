import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useState } from "react";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import CreateUser from "./pages/CreateUser";
import CreateRecipe from "./pages/CreateRecipe";
import DisplayRecipePage from "./pages/DisplayRecipePage";
import EditMealPlan from "./pages/EditMealPlan";
import CreateMealPlan from "./pages/CreateMealPlan";
import ViewMealPlans from "./pages/ViewMealPlans";
import ViewRecipes from "./pages/ViewRecipes";
import ViewMealTypes from "./pages/ViewMealTypes"
import ViewUsers from "./pages/ViewUsers"
import "./App.css";
import EditUser from "./pages/EditUser";

function App() {

  const [mealPlanToEdit, setMealPlanToEdit] = useState();
  const [userToEdit, setUserToEdit] = useState();
  const [recipeToEdit, setRecipeToEdit] = useState();


  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <div>
            <Switch>
              <Route path="/" exact>
                <HomePage setMealPlanToEdit={setMealPlanToEdit} />
              </Route>
              <Route path="/LoginPage">
                <LoginPage />
              </Route>
              <Route path="/CreateUser">
                <CreateUser />
              </Route>
              <Route path="/DisplayRecipePage">
                <DisplayRecipePage />
              </Route>
              <Route path="/CreateRecipe">
                <CreateRecipe />
              </Route>
              <Route path="/EditMealPlan">
                <EditMealPlan mealPlanToEdit={mealPlanToEdit} />
              </Route>
              <Route path="/CreateMealPlan">
                <CreateMealPlan />
              </Route>
              <Route path="/ViewMealPlans">
                <ViewMealPlans />
              </Route>
              <Route path="/ViewRecipes">
                <ViewRecipes />
              </Route>
              <Route path="/ViewUsers">
                <ViewUsers setUserToEdit={setUserToEdit}/>
              </Route>
              <Route path="/ViewMealTypes">
                <ViewMealTypes />
              </Route>
              <Route path="/EditUser">
                <EditUser userToEdit={userToEdit} />
              </Route>
            </Switch>
          </div>
        </Router>
      </header>
    </div>
  );
}

export default App;
