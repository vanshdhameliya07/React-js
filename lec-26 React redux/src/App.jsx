import { useDispatch, useSelector } from "react-redux"

function App() {

  let no = useSelector((state) => state.count)
  let dispatch = useDispatch();

  return (
    <>
      <div align="center">
        <br />
        <br />
        <br />
        <h1>Counter : {no}</h1>
        <button onClick={() => dispatch({ type: 'inc' })}>+</button>
        <button onClick={() => dispatch({ type: 'dec' })}>-</button>
        <button onClick={() => dispatch({ type: 'res' })}>reset</button>
      </div>
    </>
  )
}

export default App
