import React, { Component } from "react"
import axios from "axios"
import { setUser } from "../../../../ducks/reducer"
import { connect } from "react-redux"
import "./Edit.css"
import { Link } from "react-router-dom"


class Edit extends Component {
    state = {
        sheet: []
    }

    componentDidMount() {
        
    }

    render() {
        return (
            <div className="Edit_Outer">
                <div className="Edit_main">
                    <div className="Edit_Sheet">
                        <div className="Edit_Header">
                            <div className="Edit_Character_Name">
                                {this.state.sheet.characterName}
                            </div>
                            <div className="Edit_Character_Info">
                                <div className="Edit_Character_Info_Box">
                                    <h5>{this.state.sheet.playerClass}</h5>
                                </div>
                                <div className="Edit_Character_Info_Box">
                                    {this.state.sheet.background}
                                </div>
                                <div className="Edit_Character_Info_Box">
                                    {this.state.sheet.playerName}
                                </div>
                                <div className="Edit_Character_Info_Box">
                                    {this.state.sheet.race}
                                </div>
                                <div className="Edit_Character_Info_Box">
                                    {this.state.sheet.alignment}
                                </div>
                                <div className="Edit_Character_Info_Box">
                                    Exp: 0
                                </div>
                            </div>
                        </div>
                        <div className="Edit_Main_Body">
                            <div className="Three_Pillars_First">
                                <div className='Edit_Ability_skills'>
                                    <div className="Edit_Abilitypoints_Column">
                                        <div className="Edit_Ability">
                                            {`Str: ${this.state.sheet.str}`}
                                        </div>
                                        <div className="Edit_Ability">
                                            {`Dex: ${this.state.sheet.dex}`}
                                        </div>
                                        <div className="Edit_Ability">
                                            {`Wis: ${this.state.sheet.wis}`}
                                        </div>
                                        <div className="Edit_Ability">
                                            {`Int: ${this.state.sheet.int}`}
                                        </div>
                                        <div className="Edit_Ability">
                                            {`Cha: ${this.state.sheet.cha}`}
                                        </div>
                                        <div className="Edit_Ability">
                                            {`Con: ${this.state.sheet.con}`}
                                        </div>
                                    </div>
                                    <div className="Edit_Skills_Column_Second">
                                        <div className="Edit_Inspiration"></div>
                                        <div className="Edit_Profeciency_Bonus"></div>
                                        <div className="Edit_Saving_Throws"></div>

                                    </div>
                                </div>
                                <div className="Edit_Passive_Perception"></div>
                                <div className="Edit_Other_Profeciencies"></div>

                            </div>
                            <div className="Three_Pillars">
                                <div className="Edit_Middle_One"></div>
                                <div className="Edit_Middle_Two"></div>
                                <div className="Edit_Middle_Three"></div>
                                <div className="Edit_Middle_Four"></div>
                                <div className="Edit_Middle_Five"></div>
                            </div>
                            <div className="Three_Pillars">
                                <div className="Edit_Skills">
                                    <div style={{ backgroundColor: this.state.sheet.acrobatics ? "green" : null }} className="Edit_Individual_Skill">Acrobatics</div>
                                    <div style={{ backgroundColor: this.state.sheet.arcana ? "green" : null }} className="Edit_Individual_Skill">Arcana</div>
                                    <div style={{ backgroundColor: this.state.sheet.animal_handling ? "green" : null }} className="Edit_Individual_Skill">Ani Handle</div>
                                    <div style={{ backgroundColor: this.state.sheet.athletics ? "green" : null }} className="Edit_Individual_Skill">Athletics</div>
                                    <div style={{ backgroundColor: this.state.sheet.deception ? "green" : null }} className="Edit_Individual_Skill">Deception</div>
                                    <div style={{ backgroundColor: this.state.sheet.history ? "green" : null }} className="Edit_Individual_Skill">History</div>
                                    <div style={{ backgroundColor: this.state.sheet.insight ? "green" : null }} className="Edit_Individual_Skill">Insight</div>
                                    <div style={{ backgroundColor: this.state.sheet.intimidation ? "green" : null }} className="Edit_Individual_Skill">Intimidation</div>
                                    <div style={{ backgroundColor: this.state.sheet.investigation ? "green" : null }} className="Edit_Individual_Skill">Investigation</div>
                                    <div style={{ backgroundColor: this.state.sheet.medicine ? "green" : null }} className="Edit_Individual_Skill">Medicine</div>
                                    <div style={{ backgroundColor: this.state.sheet.nature ? "green" : null }} className="Edit_Individual_Skill">Nature</div>
                                    <div style={{ backgroundColor: this.state.sheet.perception ? "green" : null }} className="Edit_Individual_Skill">Perception</div>
                                    <div style={{ backgroundColor: this.state.sheet.performance ? "green" : null }} className="Edit_Individual_Skill">Performance</div>
                                    <div style={{ backgroundColor: this.state.sheet.persuassion ? "green" : null }} className="Edit_Individual_Skill">Persuasion</div>
                                    <div style={{ backgroundColor: this.state.sheet.religion ? "green" : null }} className="Edit_Individual_Skill">Religion</div>
                                    <div style={{ backgroundColor: this.state.sheet.sleight_of_hand ? "green" : null }} className="Edit_Individual_Skill">Sleight</div>
                                    <div style={{ backgroundColor: this.state.sheet.stealth ? "green" : null }} className="Edit_Individual_Skill">Stealth</div>
                                    <div style={{ backgroundColor: this.state.sheet.survival ? "green" : null }} className="Edit_Individual_Skill">Survival</div>
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
                                <button onClick={this.addToDatabase} className="Abilitypoints_Navigation" >Submit</button>
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
    { setUser })(Edit);