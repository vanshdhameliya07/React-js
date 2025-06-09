import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Increment } from '../redux/action/counterAction'

const Counter = () => {

    let no = useSelector((state => state.count))
    let dispatch = useDispatch()


    return (
        <div align="center">
            <h1>Counter App</h1>
            <h2>Count :{no} </h2>
            <button onClick={() => dispatch(Increment())} >+</button>
        </div>
    )
}

export default Counter
