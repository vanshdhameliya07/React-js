import React, { useState } from 'react'

const Counter_Hoc = (Web) => {

    return () => {

        let [no, setNo] = useState(0)

        let increment = () => {
            setNo(no + 1)
        }

        return (
            <Web cnt={no} plus={increment} />
        )

    }
}

export default Counter_Hoc
