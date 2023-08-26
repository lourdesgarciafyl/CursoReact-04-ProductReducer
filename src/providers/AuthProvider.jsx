import { AuthContext } from "../contexts/AuthContext"
import { useState } from "react"

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({
        isLogued: false,
        name: null
    })
    
    const login = () => {
        setUser ({
            isLogued: true,
            name: "Alberto Gomez"
        })
    }

    return (
       <AuthContext.Provider value={{
        user,
        login 
       }}>
        { children }
       </AuthContext.Provider>
    )
}