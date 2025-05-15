import React from 'react'
import Counter_Hoc from '../../Counter_Hoc'

const B = ({ cnt, plus }) => {
    return (
        <div align="center">
            <h1>B Counter</h1>
            <h2>Count:{cnt}</h2>
            <button onClick={() => plus()}>+</button>
        </div >
    )
}

let Bcomponent = Counter_Hoc(B)

export default Bcomponent
