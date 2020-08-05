import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/home";

const App = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path={["/", "/home"]} component={Home} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
