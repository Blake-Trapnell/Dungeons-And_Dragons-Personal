import React, { Component } from "react"
import axios from "axios"
import { setUser } from "../../../../ducks/reducer"
import { connect } from "react-redux"
import "./skills.css"
import { Link } from "react-router-dom"


class Skills extends Component {
    state = {
        chosenskills: null,
        availableSkills: null,
        amountOfSkills: 2,
        skills: {
            acr: false, ani: false, arc: false, ath: false,
            dec: false, his: false, ins: false, intim: false,
            inv: false, med: false, nat: false, perc: false,
            perf: false, pers: false,  rel: false, sleight: false,
            stealth: false,  sur: false
        }

    }

    componentDidMount() {
        this.aosUpdate(this.props.playerClass)
        axios.get(`/api/sheets/skills/${this.props.playerClass}`).then( res => {
            this.setState({availableSkills: res.data,
            })
            }
        )
    }

    handleChange(e) {
        const update = this.state.skills
        console.log(e.target.name)
        switch(e.target.name) {
            case "Acrobatics" :
            update.acr = !update.acr
            this.setState({
                skills: update
            })
                return
            case "animal_handling" :
            update.ani = !update.ani
             this.setState({
            skills: update
            })
                return
            case "Arcana" :
            update.arc = !update.arc
            this.setState({
                skills: update
            })
                return
            case "Athletics" :
             update.ath = !update.ath
             this.setState({
            skills: update
            })
                return
            case "deception" :
            update.dec = !update.dec
            this.setState({
                skills: update
            })
                return
            case "history" :
            update.his = !update.his
             this.setState({
            skills: update
            })
                return
            case "insight" :
            update.ins = !update.ins
            this.setState({
                skills: update
            })
                return
            case "intimidation" :
             update.intim = !update.intim
             this.setState({
            skills: update
            })
                return
            case "investigation" :
            update.inv = !update.inv
            this.setState({
                skills: update
            })
                return
            case "medicine" :
            update.med = !update.med
             this.setState({
            skills: update
            })
                return
            case "nature" :
            update.nat = !update.nat
            this.setState({
                skills: update
            })
                return
            case "perception" :
             update.perc = !update.perc
             this.setState({
            skills: update
            })
                return
            case "performance" :
            update.perf = !update.perf
            this.setState({
                skills: update
            })
                return
            case "persuassion" :
            update.pers = !update.pers
             this.setState({
            skills: update
            })
                return
            case "religion" :
            update.rel = !update.rel
            this.setState({
                skills: update
            })
                return
            case "sleight_of_hand" :
             update.sleight = !update.sleight
             this.setState({
            skills: update
            })
                return
            case "stealth" :
            update.stealth = !update.stealth
            this.setState({
                skills: update
            })
                return
            case "survival" :
             update.sur = !update.sur
             this.setState({
            skills: update
            })
                return
            default :
             return
        }
}
    
    aosUpdate(playerClass) {
        switch(playerClass) {
            case "Rogue" :
                this.setState({
                    amountOfSkills: 4
                })
                return
            case "Ranger" :
                this.setState({
                    amountOfSkills: 3
                })
                return 
            case "Bard" :
                this.setState({
                    amountOfSkills: 3
                })
                return
            default :
            return 
        }
    }


    render() {
        const {availableSkills} = this.state
        return (
            <div className="Skills_Outer">
                <div className="Skills_main">
                    <div className="Skills_Checkbox_Container" >
                        { availableSkills ?
                            availableSkills.map(el => (
                                <div key = {el.skill}>
                           <input onChange={(e)=> this.handleChange(e)} id="Skills_Checkbox" type="checkbox" name={el.skill} />
                                <label htmlFor ={el.skill} >{el.skill}</label>
                                </div>
                        ))
                        :
                        <h4>Loading...</h4>
                        }
                    </div>
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