import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";

import "./App.css";
import { WeatherDisplay } from "./components/weatherDisplay/WeatherDisplay";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/weather/:query">
            <WeatherDisplay></WeatherDisplay>
          </Route>
          <Route path="/">Welcome to the weather</Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
