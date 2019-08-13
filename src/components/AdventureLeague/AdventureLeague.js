import React, { Component } from "react"
import axios from "axios"
import { setUser } from "../../ducks/reducer"
import { connect } from "react-redux"

class Adventureleague extends Component {

    componentDidMount() {
        axios.get('/auth/checkloggedin').then( res => {
            const {username, email, user_id} = res.data
            this.props.setUser({username, email, user_id})
        }
        )
    }

    render() {
        return (
            <div>
                <h1>Adventure League</h1>
            </div>
        )
    }
}
export default connect(null,
    {setUser})(Adventureleague);