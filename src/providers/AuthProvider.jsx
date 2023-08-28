import { AuthContext } from "../contexts/AuthContext"
import { useReducer } from "react"
import { authReducer } from "../reducers/authReducer"
import { types } from "../types/types"

const initialData = {
       isLogued: false,
        name: "Alberto Gomez"
}
export const AuthProvider = ({ children }) => {
    
    const [state, dispatch] = useReducer(authReducer, initialData)
    // const [user, setUser] = useState({
    //     isLogued: false,
    //     name: null
    // })
    
    const logout = () => {
        // eliminar del local storage si fuese el caso
        dispatch({
            type: types.auth.logoutType
        })
    }
    const login = () => {
        dispatch({
            type: types.auth.loginType,
            payload: "Alberto Gomez"
        })
        // setUser ({
        //     isLogued: true,
        //     name: "Alberto Gomez"
        // })
    }

    return (
       <AuthContext.Provider value={{
        state,
        login,
        logout 
       }}>
        { children }
       </AuthContext.Provider>
    )
}