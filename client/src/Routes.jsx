import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//Components
import Navigation from "./Components/Navigation";
//Screens
import Home from "./Screens/Home";
import Schedules from "./Screens/Schedules";
import Soon from "./Screens/Soon";
import About from "./Screens/About";

function Routes() {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route path="/About" exact component={About} />
        <Route path="/Soon" exact component={Soon} />
        <Route path="/Schedules" exact component={Schedules} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default Routes;
