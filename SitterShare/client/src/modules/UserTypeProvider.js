import React, { useState, createContext } from "react";
export const userTypeContext = createContext();

export function UserTypeProvider(props) {

    const [userType, setUserType] = useState(false)

    return (
        <userTypeContext.Provider value={{ setUserType, userType }}>{props.children}</userTypeContext.Provider>
    )
}