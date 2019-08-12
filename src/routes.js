import React from "react"
import {Route, Switch} from "react-router-dom"

import Login from "./components/LoginRegister/Login"
import Home from "./components/Home/Home"
import Adventureleague from "./components/AdventureLeague/AdventureLeague"

export default (
    <switch>
        <Route component = {Home} path exact = "/" />
        <Route component = {Login}  path = "/login" />
        <Route component = {Adventureleague} path = "/adventureleague" />
    </switch>
)