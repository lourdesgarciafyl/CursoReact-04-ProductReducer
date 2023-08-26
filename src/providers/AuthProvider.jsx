import { AuthContext } from "../contexts/AuthContext"

export const AuthProvider = ({ children }) => {
    const user = {
        isLogued: false,
        name: null
    }

    return (
       <AuthContext.Provider value={{
        user
       }}>
        { children }
       </AuthContext.Provider>
    )
}