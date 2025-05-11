import { useState } from "react"

function App() {

  let [input, setInput] = useState({
    name: ''
  })

  let [data, setData] = useState("")

  let change = (e) => {

    const { name, value } = e.target;
    console.log(name, value);

    const obj = {
      ...input,
      [name]: value
    }

    setInput(obj);

  }

  let submit = (e) => {
    e.preventDefault()

  }

  return (
    <>
      <div align="center ">
        <form onSubmit={submit} >
          name:-
          <input type="text" onChange={change} name="name" placeholder="enter your name" value={input.username} />
          <br />
          <button type="submit" >submit</button>
        </form>

        <table>
          <thead>
            <tr>
              <td>name</td>
            </tr>
          </thead>
          <tbody>
            {
              obj.map((v, i) => {
                console.log(v);

              })
            }</tbody>

        </table>

      </div>

    </>
  )
}

export default App
