let Counter = ({ cnt, plus, minus, reset }) => {
    return (
        <>
            <h1>Counter app</h1>
            <h1>count :- {cnt}</h1>
            <button onClick={() => plus()}>+</button>
            <button onClick={() => minus()}>-</button>
            <button onClick={() => reset()}>Reset</button>
        </>
    )

}

export {
    Counter
}