import { useDispatch, useSelector } from "react-redux"

function App() {

  let no = useSelector((state) => state.count)
  let dispatch = useDispatch();

  return (
    <>
      <div align="center">
        <h1>Counter : {no}</h1>
        <button onClick={() => dispatch({ type: 'inc' })}>+</button>
      </div>
    </>
  )
}

export default App
