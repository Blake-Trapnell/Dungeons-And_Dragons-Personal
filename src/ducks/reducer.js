const initialState = {
    username: '',
    email: '',
    user_id: '',
    userSheets: [],
    allSheets: [],

}

const SET_USER = "SET_USER"
const SET_ALL_SHEETS = "SET_ALL_SHEETS"
const SET_USER_SHEETS = "SET_USER_SHEETS"

export function setUser(user) {
    return {
        type: SET_USER,
        payload: user
    }
}
export function setAllSheets(allsheets) {
    console.log('hit')
    console.log(allsheets)
    return {
        type: SET_ALL_SHEETS,
        payload: allsheets
    }
}
export function setUserSheets(userSheets) {

    return {
        type: SET_USER_SHEETS,
        payload: userSheets
    }
}

export default (state = initialState, action) => {
    const {type, payload} = action
        switch (type) {
            case SET_USER :
                const {username, user_id, email, password} = payload
                return {...state,username, user_id, email, password}
            case SET_ALL_SHEETS :
                const {allSheets} = payload
                return {...state, allSheets}
            case SET_USER_SHEETS :
                const{userSheets} = payload
                return {...state, userSheets}
            default : return state
        }
    }
