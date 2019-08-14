import React, { Component } from "react"
import axios from "axios"
import { setUser, setAllSheets, setUserSheets } from "../../ducks/reducer"
import { connect } from "react-redux"

class Home extends Component {
    state = {
        
    }
    
    componentDidMount() {
        this.loadingscreen()
    }

    loadingscreen = async () => {
       let results = await  axios.get('/auth/checkloggedin')
       const {username, email, user_id} = results.data
       this.props.setUser({username, email, user_id})
       if (username) {
           let userResults = await axios.get(`/api/sheets/${user_id}`)
            const userSheets = userResults.data
           this.props.setUserSheets({userSheets})
       }
       else {
           let allResults = await axios.get(`/api/sheets`)
           console.log(allResults.data)
              const allSheets = allResults.data
           this.props.setAllSheets({allSheets})
        }
    }

    render() {
        return (
            <div>
                <h1>home</h1>
            </div>
        )
    }
}
function mapStateToProps(state) {
const {username, email, user_id} = state
return {username, email, user_id}
}

export default connect(mapStateToProps,{setUser, setAllSheets, setUserSheets})(Home);