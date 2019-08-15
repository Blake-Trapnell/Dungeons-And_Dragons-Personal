import React, { Component } from "react"
// import axios from "axios"
import { setUser, setWizardStepOne } from "../../../../ducks/reducer"
import { connect } from "react-redux"
import "./ClassAndRace.css"
import { Link } from "react-router-dom"


class RaceAndClass extends Component {
    state = {
        characterName: '',
        playerName: '',
        race: '',
        playerClass: '',
        alignment: '',
        background: '',
    }

    componentDidMount() {
        // axios.get('/auth/checkloggedin').then(res => {
        //     const { username, email, user_id } = res.data
        //     this.props.setUser({ username, email, user_id })
        // }
        // )
    }

    handleChange(key,e) {
        this.setState({
            [key]: e
        })
    }

    saveStepOne = () => {
        if(this.race === "Race") {
           return alert("Please select your race")
        }
        else if(this.playerClass === "Class") {
            return alert("Please select your class")
        }
        else if (this.background === "Background") {
            return alert ('Please select your class')
        }
        else if (this.alignment === "Alignment") {
            return alert ('Please select your class')
        }
        const {characterName, playerName, playerClass, race, alignment, background} = this.state
        this.props.setWizardStepOne({playerClass, background, alignment, race, characterName, playerName})
        this.props.history.push("/adventureleague/abilitypoints")
    }

    render() {
        return (
            <div className="Adventure_Outer">
                <div className="Adventure_main">
                    <div className="Adventure_Inner_Left">
                        <input  onChange={e => this.handleChange("characterName",e.target.value)} type="text" placeholder="Character Name" className="Adventure_Input" />
                        <select name="Race" id="Race" onChange={e => this.handleChange("race", e.target.value)}>
                            <option value="Race">Race</option>
                            <option value="Dwarf">Dwarf</option>
                            <option value="Elf">Elf</option>
                            <option value="Halfling">Halfing</option>
                            <option value="Human">Human</option>
                            <option value="Dragonborn">Dragonborn</option>
                            <option value="Gnome">Gnome</option>
                            <option value="Half-Elf">Half-Elf</option>
                            <option value="Half-Orc">Half-Orc</option>
                            <option value="Tiefling">Tiefling</option>
                        </select>
                        <select onChange={e => this.handleChange("background",e.target.value)} name="Background" id="Background">
                            <option value="Background">Background</option>
                            <option value="Acolyte">Acoylte</option>
                            <option value="Charlatan">Charlatan</option>
                            <option value="Criminal/spy">Criminal / Spy</option>
                            <option value="Entertainer">Entertainer</option>
                            <option value="Folk Hero">Folk Hero</option>
                            <option value="Guild Artisan">Guild Artisan</option>
                            <option value="Hermit">Hermit</option>
                            <option value="Noble">Noble</option>
                            <option value="Outlander">Outlander</option>
                            <option value="Sage">Sage</option>
                            <option value="Sailor">Sailor</option>
                            <option value="Soldier">Soldier</option>
                            <option value="Urchin">Urchin</option>
                        </select>
                        <button onClick={this.saveStepOne} className="Adventure_Navigation" >Next</button>
                    </div>
                    <div className="Adventure_Inner_Right">
                        <input onChange={e => this.handleChange("playerName",e.target.value)} type="text" placeholder="Player Name" className="Adventure_Input" />
                        <select onChange={e => this.handleChange("playerClass",e.target.value)} name="Class" id="Class">
                            <option value="Class">Class</option>
                            <option value="Barbarian">Barbarian</option>
                            <option value="Bard">Bard</option>
                            <option value="Cleric">Cleric</option>
                            <option value="Druid">Druid</option>
                            <option value="Fighter">Fighter</option>
                            <option value="Monk">Monk</option>
                            <option value="Paladin">Paladin</option>
                            <option value="Ranger">Ranger</option>
                            <option value="Rogue">Rogue</option>
                            <option value="Sorcerer">Sorcerer</option>
                            <option value="Warlock">Warlock</option>
                            <option value="Wizard">Wizard</option>
                        </select>
                        <select onChange={e => this.handleChange("alignment",e.target.value)} name="Alignment" id="Alignment">
                            <option value="Alignment">Alignment</option>
                            <option value="Lawful Good">Lawful Good</option>
                            <option value="Neutral Good">Neutral Good</option>
                            <option value="Chaotic Good">Chaotic Good</option>
                            <option value="Lawful Neutral">Lawful Neutral</option>
                            <option value="Neutral">Neutral</option>
                            <option value="Chaotic Neutral">Chaotic Neutral</option>
                            <option value="Lawful Evil">Lawful Evil</option>
                            <option value="Neutral Evil">Neutral Evil</option>
                            <option value="Chaotic Evil">Chaotic Evil</option>
                        </select>
                        <Link to="/">
                            <button className="Adventure_Navigation" >Cancel</button>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const {username, email, user_id} = state
    return {username, email, user_id}
    }

export default connect(mapStateToProps,
    { setUser, setWizardStepOne })(RaceAndClass);