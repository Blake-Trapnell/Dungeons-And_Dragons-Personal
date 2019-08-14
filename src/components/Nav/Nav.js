import React, {Component} from "react"
import "./Nav.css"
import {Link} from "react-router-dom"
// import { connect } from "react-redux"
// import {withRouter} from "react-router-dom"

export default class Nav extends Component {


    render() {
        return (
            <div className="Nav_main">
            <header className="Nav_Header">
                <div className="Nav_Builders">
                <div className="Nav_Hamburger">
                    <h5>Menu</h5>
                </div>
                    <div className="Nav_Links">
                        <Link to = "/">
                        <h3>Home</h3>
                        </Link>
                    </div>
                    <div className="Nav_Links">
                        <Link to = "/adventureleague/raceandclass">
                        <h3>Adventure</h3>
                        </Link>
                    </div>
                    <div className="Nav_Links">
                        <h3>Custom</h3>
                    </div>
                    <div className="Nav_Links">
                        <h3>Random</h3>
                    </div>
                </div>
                <div className="Nav Login">
                <Link to = "/login">
                    <h3>Login/ Register</h3>
                </Link>
                </div>
            </header>
            <div id="dropdown" className="dropdown hide">
                <div className="Nav_container">
                    <li>Home</li>
                    <li>Adenture</li>
                    <li>Custom</li>
                    <li>Random</li>
                </div>
            </div>

        </div>
    )
}
}