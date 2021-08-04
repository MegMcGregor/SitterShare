import React, { useState, createContext } from "react";
export const userTypeContext = createContext();

export function UserTypeProvider(props) {

    const [userType, setUserType] = useState(false)
    console.log(sessionStorage.userType)
    if (userType === false) {
        if (sessionStorage.userType !== undefined) {
            setUserType(true)
        }
    }

    return (
        <userTypeContext.Provider value={{ setUserType, userType }}>{props.children}</userTypeContext.Provider>
    )
}