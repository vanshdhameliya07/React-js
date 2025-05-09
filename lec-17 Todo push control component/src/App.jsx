import React from 'react'
import { useState } from 'react'

const App = () => {

  let [name, setName] = useState("");
  let [todo, setTodo] = useState([])


  let deleteuser = (id) => {
    console.log(id);

    let single = todo.filter(val => val.id != id)
    setTodo(single);


  }


  let handlesubmit = (event) => {
    event.preventDefault()

    let obj = {
      id: Math.floor(Math.random() * 100),
      name: name
    }
    setTodo([...todo, obj]);
    setName("")
  }

  return (
    <div align="center">

      <form onSubmit={handlesubmit}>
        name :
        <input type="text" onChange={(event) => setName(event.target.value)} value={name} />
        <br />
        <button type="submit">submit</button>

      </form>



      <table border={1}>
        <thead>
          <tr>
            <td>id</td>
            <td>name</td>
            <td>action</td>
          </tr>
        </thead>
        <tbody>
          {
            todo.map((val, i) => {
              return (
                <tr key={i}>
                  <td>{val.id}</td>
                  <td>{val.name}</td>

                  <td> <button onClick={() => deleteuser(val.id)}>delete</button></td>
                </tr>
              )
            })
          }
        </tbody>
      </table>

    </div>
  )
}

export default App
