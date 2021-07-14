import React from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Matrix from "./pages/Matrix";
import Header from "./components/Header";

import "./assets/styles/darkMoodApp.css";
import "./assets/styles/query.css";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/">
          <Matrix />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
