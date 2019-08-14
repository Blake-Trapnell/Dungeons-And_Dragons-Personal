import React, { Component } from "react"
import axios from "axios"
import { setUser } from "../../ducks/reducer"
import { connect } from "react-redux"
import "./AdventureLeague.css"
import { Link } from "react-router-dom"


class Adventureleague extends Component {

    componentDidMount() {
        axios.get('/auth/checkloggedin').then(res => {
            const { username, email, user_id } = res.data
            this.props.setUser({ username, email, user_id })
        }
        )
    }

    render() {
        return (
            <div className="Adventure_Outer">
                <div className="Adventure_main">
                    <div className="Adventure_Inner_Left">
                        <input type="text" placeholder="Character Name" className="Adventure_Input" />
                        <select name="Race" id="">
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
                        <select name="Background" id="">
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
                        <button className="Adventure_Navigation" >Next</button>
                    </div>
                    <div className="Adventure_Inner_Right">
                        <input type="text" placeholder="Player Name" className="Adventure_Input" />
                        <select name="Class" id="">
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
                        <select name="Alignment" id="">
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
export default connect(null,
    { setUser })(Adventureleague);