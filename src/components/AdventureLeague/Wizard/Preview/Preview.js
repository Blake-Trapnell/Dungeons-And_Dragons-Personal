import React, { Component } from "react"
// import axios from "axios"
import { setUser } from "../../../../ducks/reducer"
import { connect } from "react-redux"
import "./Preview.css"
import { Link } from "react-router-dom"


class Preview extends Component {
componentDidMount(){
}


    render() {
        return (
            <div className="Preview_Outer">
                <div className="Preview_main">
                    <div className="Preview_Sheet">
                        <div className="Preview_Header">
                            <div className="Preview_Character_Name">
                                {this.props.characterName}
                            </div>
                            <div className="Preview_Character_Info">
                                <div className="Preview_Character_Info_Box">
                                    <h5>{this.props.playerClass}</h5>
                                </div>
                                <div className="Preview_Character_Info_Box">
                                    {this.props.background}
                                </div>
                                <div className="Preview_Character_Info_Box">
                                    {this.props.playerName}
                                </div>
                                <div className="Preview_Character_Info_Box">
                                    {this.props.race}
                                </div>
                                <div className="Preview_Character_Info_Box">
                                    {this.props.alignment}
                                </div>
                                <div className="Preview_Character_Info_Box">
                                    Exp: 0
                                </div>
                            </div>
                        </div>
                        <div className="Preview_Main_Body">
                            <div className="Three_Pillars_First">
                                <div className='Preview_Ability_skills'>
                                    <div className="Preview_Abilitypoints_Column">
                                        <div className="Preview_Ability">
                                            {`Str: ${this.props.str}`}
                                        </div>
                                        <div className="Preview_Ability">
                                            {`Dex: ${this.props.dex}`}
                                        </div>
                                        <div className="Preview_Ability">
                                            {`Wis: ${this.props.wis}`}
                                        </div>
                                        <div className="Preview_Ability">
                                            {`Int: ${this.props.int}`}
                                        </div>
                                        <div className="Preview_Ability">
                                            {`Cha: ${this.props.cha}`}
                                        </div>
                                        <div className="Preview_Ability">
                                            {`Con: ${this.props.con}`}
                                        </div>
                                    </div>
                                    <div className="Preview_Skills_Column_Second">
                                        <div className="Preview_Inspiration"></div>
                                        <div className="Preview_Profeciency_Bonus"></div>
                                        <div className="Preview_Saving_Throws"></div>

                                    </div>
                                </div>
                                <div className="Preview_Passive_Perception"></div>
                                <div className="Preview_Other_Profeciencies"></div>

                            </div>
                            <div className="Three_Pillars">
                                <div className="Preview_Middle_One"></div>
                                <div className="Preview_Middle_Two"></div>
                                <div className="Preview_Middle_Three"></div>
                                <div className="Preview_Middle_Four"></div>
                                <div className="Preview_Middle_Five"></div>
                            </div>
                            <div className="Three_Pillars">
                                <div className="Preview_Skills">
                                    <div style={{ backgroundColor: this.props.acrobatics ? "green" : null }} className="Preview_Individual_Skill">Acrobatics</div>
                                    <div style={{ backgroundColor: this.props.arcana ? "green" : null }} className="Preview_Individual_Skill">Arcana</div>
                                    <div style={{ backgroundColor: this.props.animal_handling ? "green" : null }} className="Preview_Individual_Skill">Animal Handling</div>
                                    <div style={{ backgroundColor: this.props.athletics ? "green" : null }} className="Preview_Individual_Skill">Athletics</div>
                                    <div style={{ backgroundColor: this.props.deception ? "green" : null }} className="Preview_Individual_Skill">Deception</div>
                                    <div style={{ backgroundColor: this.props.history ? "green" : null }} className="Preview_Individual_Skill">History</div>
                                    <div style={{ backgroundColor: this.props.insight ? "green" : null }} className="Preview_Individual_Skill">Insight</div>
                                    <div style={{ backgroundColor: this.props.intimidation ? "green" : null }} className="Preview_Individual_Skill">Intimidation</div>
                                    <div style={{ backgroundColor: this.props.investigation ? "green" : null }} className="Preview_Individual_Skill">Investigation</div>
                                    <div style={{ backgroundColor: this.props.medicine ? "green" : null }} className="Preview_Individual_Skill">Medicine</div>
                                    <div style={{ backgroundColor: this.props.nature ? "green" : null }} className="Preview_Individual_Skill">Nature</div>
                                    <div style={{ backgroundColor: this.props.perception ? "green" : null }} className="Preview_Individual_Skill">Perception</div>
                                    <div style={{ backgroundColor: this.props.performance ? "green" : null }} className="Preview_Individual_Skill">Performance</div>
                                    <div style={{ backgroundColor: this.props.persuassion ? "green" : null }} className="Preview_Individual_Skill">Persuasion</div>
                                    <div style={{ backgroundColor: this.props.religion ? "green" : null }} className="Preview_Individual_Skill">Religion</div>
                                    <div style={{ backgroundColor: this.props.sleight_of_hand ? "green" : null }} className="Preview_Individual_Skill">Sleight_of_hand</div>
                                    <div style={{ backgroundColor: this.props.stealth ? "green" : null }} className="Preview_Individual_Skill">Stealth</div>
                                    <div style={{ backgroundColor: this.props.survival ? "green" : null }} className="Preview_Individual_Skill">Survival</div>
                                </div>
                            </div>
                        </div>
                        <div className="Skills_Button_container">
                            <Link to="/">
                                <button className="Abilitypoints_Navigation" >Cancel</button>
                            </Link>
                            <Link to="/adventureleague/skills">
                                <button className="Abilitypoints_Navigation">Previous</button>
                            </Link>
                            <Link to="/">
                                <button onClick={this.saveStepThree} className="Abilitypoints_Navigation" >Submit</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
function mapStateToProps(state) {
    const { user_id, characterName, playerName, playerClass, race, background, alignment, str, dex, wis, int, cha, con, acrobatics, arcana, animal_handling, athletics, deception, history, insight, intimidation, investigation, medicine, nature, perception, performance, persuassion, religion, sleight_of_hand, stealth, survival, } = state
    return { user_id, characterName, playerName, playerClass, race, background, alignment, str, dex, wis, int, cha, con, acrobatics, arcana, animal_handling, athletics, deception, history, insight, intimidation, investigation, medicine, nature, perception, performance, persuassion, religion, sleight_of_hand, stealth, survival, }
}

export default connect(mapStateToProps,
    { setUser })(Preview);