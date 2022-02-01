import React, { useContext, useState } from 'react';

const AuthContext = React.createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export default function AuthContextProvider({ children }) {
    const [user, dispatch] = useState({})

    const logout = () => {
        dispatch({ type: "DELETE_USER" });
    }

    const value = {
        user: user,
        dispatch: dispatch,
        logout: logout
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}
