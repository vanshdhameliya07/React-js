import React, { useState } from 'react'

const Counter_Hoc = (Web) => {

    return () => {

        let [no, setNo] = useState(0)
        
    

        let [user, setUser] = useState([
            { name: "john", phone: "89898" },
            { name: "veer", phone: "26449" }
        ])

        let [all, setAll] = useState([])

        let increment = () => {
            setNo(no + 1)
        }
        let functions = () => {
            setAll(user)
        }





        return (
            <Web cnt={no} plus={increment} user={functions} all={all} />

        )

    }
}

export default Counter_Hoc
