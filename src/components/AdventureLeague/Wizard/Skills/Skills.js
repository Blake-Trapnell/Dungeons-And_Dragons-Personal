import React, { Component } from "react"
import axios from "axios"
import { setUser } from "../../../../ducks/reducer"
import { connect } from "react-redux"
import "./skills.css"
import { Link } from "react-router-dom"


class Skills extends Component {
    state = {
        skills: []
    }

    componentDidMount() {
        axios.get(`/api/sheets/skills/${this.props.playerClass}`).then( res => {
            this.setState({skills: res})
        }
            )
    }



    render() {
        return (
            <div className="Skills_Outer">
                <div className="Skills_main">
                    <div className="Skills_Button_container">
                        
                        <Link to ="/adventureleague/equipment">
                        <button onClick={this.saveStepTwo} className="Abilitypoints_Navigation" >Next</button>
                        </Link>
                        <Link to = "/adventureleague/archetype">
                            <button className="Abilitypoints_Navigation">Previous</button>
                        </Link>
                        <Link to="/">
                            <button className="Abilitypoints_Navigation" >Cancel</button>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { playerClass, race} = state
    return { playerClass, race}
}

export default connect(mapStateToProps,
    { setUser})(Skills);