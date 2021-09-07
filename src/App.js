import React from "react";
import "./App.css";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import AboutScreen from "./screens/AboutScreen/AboutScreen.js";
import HomeScreen from "./screens/HomeScreen/HomeScreen.js";
const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomeScreen} />
        <Route exact path="/about" component={AboutScreen} />
      </Switch>
    </Router>
  );
};

export default App;
