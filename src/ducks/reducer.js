const initialState = {
    username: '',
    email: '',
    user_id: '',
    userSheets: [],
    allSheets: [],
    characterName: 'This Months Character',
    playerName: 'Ion Steel',
    race: 'Tiefling',
    playerClass: 'bard',
    background: 'Sage',
    alignment: 'Chaotic Good',
    str: 8,
    dex: 10,
    wis: 12,
    int: 13,
    cha: 15,
    con: 14,

}

const SET_USER = "SET_USER"
const SET_ALL_SHEETS = "SET_ALL_SHEETS"
const SET_USER_SHEETS = "SET_USER_SHEETS"
const SET_WIZARD_STEP_ONE = "SET_WIZARD_STEP_ONE"
const SET_WIZARD_STEP_TWO = "SET_WIZARD_STEP_TWO"

export function setUser(user) {
    return {
        type: SET_USER,
        payload: user
    }
}
export function setAllSheets(allsheets) {
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
export function setWizardStepOne(classAndRaceInfo) {
    return {
        type: SET_WIZARD_STEP_ONE,
        payload: classAndRaceInfo
    }
}
export function setWizardStepTwo(abilitypoints){
    return{
        type: SET_WIZARD_STEP_TWO,
        payload: abilitypoints
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
            case SET_WIZARD_STEP_ONE :
                const {characterName, playerName, race, playerClass, background, alignment} = payload
                return {...state, characterName, playerName, race, playerClass, background, alignment}
            case SET_WIZARD_STEP_TWO :
                const {str, dex, wis, int, cha, con} = payload
                return{...state, str, dex, wis, int, cha, con}
            default : return state
        }
    }
