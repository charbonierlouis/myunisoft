import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./app.css";
import "./ui/ui.css";
import LoginScreen from "./screens/Login";
import HomeScreen from "./screens/Home";
import _routes from "./constants/routes";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path={_routes.login}>
          <LoginScreen />
        </Route>
        <Route path={_routes.users}>
          <HomeScreen />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
