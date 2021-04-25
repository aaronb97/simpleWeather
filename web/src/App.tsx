import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import WeatherDisplay from './components/weatherDisplay/WeatherDisplay';

function App() {
  return (
    <>
      <Router>
        Nav bar goes here
        <Switch>
          <Route path="/weather/:query">
            <WeatherDisplay />
          </Route>
          <Route path="/">Welcome to the weather</Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
