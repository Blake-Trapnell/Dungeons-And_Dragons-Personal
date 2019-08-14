import React from "react"
import {Route, Switch} from "react-router-dom"

import Login from "./components/LoginRegister/Login"
import Home from "./components/Home/Home"
import Adventureleague from "./components/AdventureLeague/AdventureLeague"
import Raceandclass from "./components/AdventureLeague/Wizard/ClassAndRace/ClassAndRace"
export default (
    <Switch>
        <Route component = {Home} path = "/" exact />
        <Route component = {Login}  path = "/login" />
        <Route component = {Adventureleague} path = "/adventureleague" />
        <Route component = {Raceandclass} path = "/adventureleague/raceandclass"/>
    </Switch>
)