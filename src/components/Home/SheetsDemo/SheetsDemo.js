import React, { Component } from "react"
import axios from "axios"
import { setUser, setAllSheets, setUserSheets } from "../../../ducks/reducer"
import { connect } from "react-redux"
import "./SheetsDemo.css"
import { Link } from "react-router-dom"

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

    deleteBySheet_id = (sheetid) => {
        console.log(sheetid)
        axios.delete(`api/sheets/${sheetid}`)

    }

    render() {
        return (
            <div className="Sheets">
                <div className="Sheets_Main_Screen">
                    {this.state.userSheets ? this.state.userSheets.map(el =>
                        <div className="SheetsDemo_CharacterList" key={el.character_name}>
                            <div className="SheetsDemo_Character_Container">
                            <h4 className="SheetsDemo_h4" >{el.character_name}</h4>
                            <h4 className="SheetsDemo_h4" >{el.playername}</h4>
                            <h4 className="SheetsDemo_h4" >{el.race}</h4>
                            <h4 className="SheetsDemo_h4" >{el.class}</h4>
                            </div>
                            <div className="SheetsDemo_Button_Container">
                                <Link to="/">
                                    <button className="SheetsDemo_Button" >Edit</button>
                                </Link>
                                <Link to="adventureleague/raceandclass">
                                    <button onClick={() => this.deleteBySheet_id(el.sheet_id)} className="SheetsDemo_Button" >Delete</button>
                                </Link>

                            </div>
                        </div>
                    )
                        :
                        null}
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