import React, { Component } from "react"
// import axios from "axios"
import { setUser } from "../../../../ducks/reducer"
import { connect } from "react-redux"
import "./Preview.css"
// import { Link } from "react-router-dom"


class Preview extends Component {

    render() {
        return (
            <div className="Preview_Outer">
                <div className="Preview_main">
                    <div className="Preview_Sheet">
                        <div className="Preview_Header"></div>
                        <div className="Preview_Main_Body">
                            <div className="Three_Pillars_First">
                                <div className='Preview_Ability_skills'>
                                    <div className="Preview_Abilitypoints_Column">
                                        <div className="Preview_Ability"></div>
                                        <div className="Preview_Ability"></div>
                                        <div className="Preview_Ability"></div>
                                        <div className="Preview_Ability"></div>
                                        <div className="Preview_Ability"></div>
                                        <div className="Preview_Ability"></div>
                                    </div>
                                    <div className="Preview_Skills_Column_Second">
                                        <div className="Preview_Inspiration"></div>
                                        <div className="Preview_Profeciency_Bonus"></div>
                                        <div className="Preview_Saving_Throws"></div>
                                        <div className="Preview_Skills"></div>
                                    </div>
                                </div>
                                <div className="Preview_Passive_Perception"></div>
                                <div className="Preview_Other_Profeciencies"></div>

                            </div>
                            <div className="Three_Pillars">

                            </div>
                            <div className="Three_Pillars">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { playerClass } = state
    return { playerClass }
}

export default connect(mapStateToProps,
    { setUser })(Preview);