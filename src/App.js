import React, {Component} from 'react';
import './App.css';
import {HashRouter} from "react-router-dom"
import routes from "./routes"
import Nav from "./components/Nav/Nav"
import {withRouter} from "react-router-dom"


class App extends Component {
  render() {

    return (
      <HashRouter>
      <div className="App">
      {this.props.location.pathname === "/login" || this.props.location.pathname === "/adventureleague" || this.props.location.pathname === "/adventureleague/preview"
      || this.props.location.pathname === "/adventureleague/raceandclass"
      || this.props.location.pathname === "/adventureleague/abilitypoints"
      || this.props.location.pathname === "/adventureleague/skills"
       ? null
       : <Nav/>}

    {routes}
    </div>
      </HashRouter>
  );
}
}
export default withRouter(App)