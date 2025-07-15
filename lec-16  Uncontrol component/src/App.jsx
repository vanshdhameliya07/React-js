import { useState } from "react"

function App() {

  let [name, setName] = useState("")
  let [email, setEmail] = useState("")

  let handlesubmit = (event) => {
    event.preventDefault()
    console.log(name);
    console.log(email);
  }



  return (
    <>
      <h1>controll component</h1>


      <form onSubmit={handlesubmit}>
        <table border={1} align='center'>
          <thead>
            <tr>
              <td>name</td>
              <td><input type="text" onChange={(e) => setName(e.target.value)} value={name} /></td>
            </tr>
            <tr>
              <td>email</td>
              <td><input type="text" onChange={(e) => setEmail(e.target.value)} value={email} /></td>
            </tr>
            <tr>
              <td></td>
              <td><input type="submit" /></td>
            </tr>
          </thead>
        </table>
      </form>
    </>
  )
}

export default App
