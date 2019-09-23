import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import UserPage from "./pages/UserPage";
import ViewClientPage from "./pages/ViewClientPage";

export default function App() {
  return (
    <Switch>
      <Route exact path="/HomePage" component={HomePage} />
      <Route path="/UserPage" component={UserPage} />
    </Switch>
  );
}
