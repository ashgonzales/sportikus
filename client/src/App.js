import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./screens/Home/Home";
import Products from "./screens/Products/Products";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/products">
          <Products />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
