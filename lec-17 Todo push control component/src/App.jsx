import { useState } from "react";

const App = () => {


  let [name, setName] = useState("")
  let [todos, setTodos] = useState([])
  let [editid, setEditid] = useState("")


  let deleteuser = (id) => {
    let deletes = todos.filter(val => val.id != id)
    setTodos(deletes)

  }

  let edituser = (id) => {
    let edit = todos.find(val => val.id == id);
    setEditid(id);
    setName(edit.name)

  }

  let submit = (event) => {
    event.preventDefault();


    if (editid) {
      let up = todos.map((val, i) => {
        if (val.id == editid) {
          return {
            ...val,
            name: name
          }
        }
        return val
      })
      setTodos(up)
      setName("")
      setEditid("")
    }
    else {
      let obj = {
        id: Math.floor(Math.random() * 100),
        name: name
      }
      setTodos([...todos, obj]);
      setName("")

    }


  }

  return (
    <div align="center">


      <form onSubmit={submit}>
        <h1>form validation</h1>
        name :<input type="text" onChange={(event) => setName(event.target.value)} value={name} /><br />
        <br />
        {
          editid ? (<button type="submit" >Update</button>) : (<button type="submit" >Submit</button>)
        }
      </form>
      <br />
      <table border={1} cellPadding={5}>
        <thead>
          <tr>
            <td>id</td>
            <td>name</td>
            <td>delete</td>
            <td>edit</td>
          </tr>
        </thead>
        <tbody>
          {
            todos.map((val, i) => {
              let { id, name } = val
              return (
                <tr key={i}>
                  <td>{id}</td>
                  <td>{name}</td>

                  <td><button onClick={() => deleteuser(id)} >delete</button></td>
                  <td><button onClick={() => edituser(id)} >Edit</button></td>
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
