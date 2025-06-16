import { createContext, useState } from 'react'

export let Myprovider = createContext()

const Context = ({ children }) => {

    let [no, setNo] = useState(0)

    let INcrement = () => {
        setNo(no + 1)
    }
    let Decrement = () => {
        setNo(no - 1)
    }
    let reset = () => {
        setNo(0)
    }

    return (
        <Myprovider.Provider value={{ no, INcrement, Decrement, reset }}>
            {children}
        </Myprovider.Provider>
    )
}

export default Context
