import "./App.css";
import React from "react";
import { NavigationBar } from "./components/NavigationBar/NavigationBar";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./Home";
import { About } from "./About";
import { NoMatch } from "./NoMatch";
import SideBar from "./components/SideBar/SideBar";

function App() {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route component={NoMatch} />
        </Switch>
        <NavigationBar />
        <SideBar />
      </Router>
    </React.Fragment>
  );
}

export default App;
