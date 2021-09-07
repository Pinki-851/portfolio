import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import Store from "./store";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AboutScreen from "./screens/AboutScreen/AboutScreen.js";
import HomeScreen from "./screens/HomeScreen/HomeScreen.js";
import { Listener } from "./Listener";
const App = () => {
  return (
    <Provider store={Store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomeScreen} />
          <Route exact path="/about" component={AboutScreen} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
