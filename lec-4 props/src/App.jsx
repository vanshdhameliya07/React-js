import Home from "./Home"

function App() {

  let a = 10;

  let color = ["red", "pink", "skyblue", "purpule"]

  return (
    <>

      <Home aa={a} colorr={color} />

    </>
  )

}

function sum() {

  let a = 20, b = 20;

  return (
    <>
      <Home sum={a} />
    </>
  )

}

export default App
