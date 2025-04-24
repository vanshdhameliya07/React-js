import React from 'react'

const Counter = ({ cnt, plus, minus, reset }) => {

    return (
        <>
            <h1>Counter</h1>
            <h2>cnt : {cnt}</h2>
            <button onClick={() => plus()}>+</button>
            <button disabled={cnt == 0} onClick={() => minus()}>-</button>
            <button onClick={() => reset()}>reset</button>
        </>
    )
}

export default Counter
