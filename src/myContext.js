import React, { useState } from 'react'

const MyContext = React.createContext()

const MyContextProvider = ({ children }) => {
    const [commonData, setCommonData] = useState('No Color')

    return (
        <MyContext.Provider value={{ commonData, setCommonData }} >
            { children}
        </MyContext.Provider >
    )
}

export { MyContext, MyContextProvider }