import React, { createContext, useState } from 'react';

export const MyContext = createContext();

const ContextProvider = ({ children }) => {
    const [no, setNo] = useState(0);

    let Increment = () => {
        setNo(no + 1)
    }

    return (
        <MyContext.Provider value={{ no, Increment }}>
            {children}
        </MyContext.Provider>
    );
};

export default ContextProvider;
