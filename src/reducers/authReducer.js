import { types } from "../types/types"

export const authReducer = (state={}, action) => {
    switch(action.type) {
        case types.auth.loginType:
        return {
            ...state,
            isLogued: true,
            name: action.payload
        }
        case types.auth.logoutType:
            return{
                isLogued: false,
                name: null
            }

        default:
        return state 
    }
}