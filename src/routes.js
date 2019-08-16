import React from "react"
import {Route, Switch} from "react-router-dom"

import Login from "./components/LoginRegister/Login"
import Home from "./components/Home/Home"
import Raceandclass from "./components/AdventureLeague/Wizard/ClassAndRace/ClassAndRace"
import Abilitypoints from "./components/AdventureLeague/Wizard/AbilityPoints/AbilityPoints"
import Archetype from "./components/AdventureLeague/Wizard/Archetype/Archetype"
import Skills from "./components/AdventureLeague/Wizard/Skills/Skills"
import Preview from "./components/AdventureLeague/Wizard/Preview/Preview"
export default (
    <Switch>
        <Route component = {Home} path = "/" exact />
        <Route component = {Login}  path = "/login" />
        <Route component = {Raceandclass} path = "/adventureleague/raceandclass"/>
        <Route component = {Abilitypoints} path = "/adventureleague/abilitypoints"/>
        <Route component = {Archetype} path = "/adventureleague/archetype"/>
        <Route component = {Skills} path = "/adventureleague/skills"/>
        <Route component = {Preview} path = "/adventureleague/preview"/>
    </Switch>
)