const initialState = {
    username: '',
    email: '',
    password: '',
    user_id: '',

}

const SET_USER = "SET_USER"

export function setUser(user) {
    return {
        type: SET_USER,
        payload: user
    }
}

export default (state = initialState, action) => {
    const {type, payload} = action
        switch (type) {
            case SET_USER :
                const {username, user_id, email, password} = payload
                return {...state,username, user_id, email, password}
            default : return state
        }
    }
