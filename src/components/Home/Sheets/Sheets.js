import React, { Component } from "react"
import axios from "axios"
import { setUser, setAllSheets, setUserSheets } from "../../../ducks/reducer"
import { connect } from "react-redux"
import "./Sheets.css"

class Sheets extends Component {
    state = {
        userSheets: null,
        allSheets: []
    }

    componentDidMount() {
        this.loadingscreen()
    }

    loadingscreen = async () => {
        let results = await axios.get('/auth/checkloggedin')
        const { username, email, user_id } = results.data
        this.props.setUser({ username, email, user_id })
        if (username) {
            let userResults = await axios.get(`/api/sheets/${user_id}`)
            const userSheets = userResults.data
            this.props.setUserSheets({ userSheets })
            this.setState({
                userSheets
            })
        }
        else {
            let allResults = await axios.get(`/api/sheets`)

            const allSheets = allResults.data
            this.props.setAllSheets({ allSheets })
            this.setState({ allSheets })
        }
    }

    render() {
        return (
            <div className="Sheets">
                <div className="Sheets_Main_Screen">
                    {this.state.userSheets ? this.state.userSheets.map(el => (
                        <div key={el.char} className="Sheets_Outer">
                            <div className="Sheets_main">
                                <div className="Sheets_Sheet">
                                    <div className="Sheets_Header">
                                        <div className="Sheets_Character_Name">
                                            {el.character_name}
                                        </div>
                                        <div className="Sheets_Character_Info">
                                            <div className="Sheets_Character_Info_Box">
                                                <h5>{el.class}</h5>
                                            </div>
                                            <div className="Sheets_Character_Info_Box">
                                                {el.background}
                                            </div>
                                            <div className="Sheets_Character_Info_Box">
                                                {el.playername}
                                            </div>
                                            <div className="Sheets_Character_Info_Box">
                                                {el.race}
                                            </div>
                                            <div className="Sheets_Character_Info_Box">
                                                {el.alignment}
                                            </div>
                                            <div className="Sheets_Character_Info_Box">
                                                Exp: 0
                                </div>
                                        </div>
                                    </div>
                                    <div className="Sheets_Main_Body">
                                        <div className="Three_Pillars_First">
                                            <div className='Sheets_Ability_skills'>
                                                <div className="Sheets_Abilitypoints_Column">
                                                    <div className="Sheets_Ability">
                                                        {`Str: ${el.strength}`}
                                                    </div>
                                                    <div className="Sheets_Ability">
                                                        {`Dex: ${el.dexterity}`}
                                                    </div>
                                                    <div className="Sheets_Ability">
                                                        {`Wis: ${el.wisdom}`}
                                                    </div>
                                                    <div className="Sheets_Ability">
                                                        {`Int: ${el.intelligence}`}
                                                    </div>
                                                    <div className="Sheets_Ability">
                                                        {`Cha: ${el.charisma}`}
                                                    </div>
                                                    <div className="Sheets_Ability">
                                                        {`Con: ${el.constitution}`}
                                                    </div>
                                                </div>
                                                <div className="Sheets_Skills_Column_Second">
                                                    <div className="Sheets_Inspiration"></div>
                                                    <div className="Sheets_Profeciency_Bonus"></div>
                                                    <div className="Sheets_Saving_Throws"></div>

                                                </div>
                                            </div>
                                            <div className="Sheets_Passive_Perception"></div>
                                            <div className="Sheets_Other_Profeciencies"></div>

                                        </div>
                                        <div className="Three_Pillars">
                                            <div className="Sheets_Middle_One"></div>
                                            <div className="Sheets_Middle_Two"></div>
                                            <div className="Sheets_Middle_Three"></div>
                                            <div className="Sheets_Middle_Four"></div>
                                            <div className="Sheets_Middle_Five"></div>
                                        </div>
                                        <div className="Three_Pillars">
                                            <div className="Sheets_Skills">
                                                <div style={{ backgroundColor: el.acrobatics ? "green" : null }} className="Sheets_Individual_Skill">Acrobatics</div>
                                                <div style={{ backgroundColor: el.arcana ? "green" : null }} className="Sheets_Individual_Skill">Arcana</div>
                                                <div style={{ backgroundColor: el.animal_handling ? "green" : null }} className="Sheets_Individual_Skill">Animal Handling</div>
                                                <div style={{ backgroundColor: el.athletics ? "green" : null }} className="Sheets_Individual_Skill">Athletics</div>
                                                <div style={{ backgroundColor: el.deception ? "green" : null }} className="Sheets_Individual_Skill">Deception</div>
                                                <div style={{ backgroundColor: el.history ? "green" : null }} className="Sheets_Individual_Skill">History</div>
                                                <div style={{ backgroundColor: el.insight ? "green" : null }} className="Sheets_Individual_Skill">Insight</div>
                                                <div style={{ backgroundColor: el.intimidation ? "green" : null }} className="Sheets_Individual_Skill">Intimidation</div>
                                                <div style={{ backgroundColor: el.investigation ? "green" : null }} className="Sheets_Individual_Skill">Investigation</div>
                                                <div style={{ backgroundColor: el.medicine ? "green" : null }} className="Sheets_Individual_Skill">Medicine</div>
                                                <div style={{ backgroundColor: el.nature ? "green" : null }} className="Sheets_Individual_Skill">Nature</div>
                                                <div style={{ backgroundColor: el.perception ? "green" : null }} className="Sheets_Individual_Skill">Perception</div>
                                                <div style={{ backgroundColor: el.performance ? "green" : null }} className="Sheets_Individual_Skill">Performance</div>
                                                <div style={{ backgroundColor: el.persuassion ? "green" : null }} className="Sheets_Individual_Skill">Persuasion</div>
                                                <div style={{ backgroundColor: el.religion ? "green" : null }} className="Sheets_Individual_Skill">Religion</div>
                                                <div style={{ backgroundColor: el.sleight_of_hand ? "green" : null }} className="Sheets_Individual_Skill">Sleight_of_hand</div>
                                                <div style={{ backgroundColor: el.stealth ? "green" : null }} className="Sheets_Individual_Skill">Stealth</div>
                                                <div style={{ backgroundColor: el.survival ? "green" : null }} className="Sheets_Individual_Skill">Survival</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                        :
                        <h1 className="Sheets_Loading">Loading...</h1>}
                </div>
            </div>
        )
    }
}
function mapStateToProps(state) {
    const { username, email, user_id } = state
    return { username, email, user_id }
}

export default connect(mapStateToProps, { setUser, setAllSheets, setUserSheets })(Sheets);