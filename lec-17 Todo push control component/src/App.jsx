import { useState } from "react";
import './App.css'

function App() {
  const [name, setName] = useState("");
  const [todos, setTodos] = useState([]);
  const [editid, setEditid] = useState("");

  const handlesubmit = (event) => {
    event.preventDefault()

    if (editid) {

      let update = todos.map((val, i) => {

        if (val.id === editid) {
          return {
            ...val,
            name
          }
        }
        return val
      })

      setTodos(update);
      setEditid("");
      setName("")


    }
    else {
      const obj = {
        id: Math.floor(Math.random() * 1000),
        name: name,
        status: "active"
      };
      setTodos([...todos, obj]);
      setName("")
    }


  };

  let deleteRecord = (id) => {
    let single = todos.filter(val => val.id != id);
    setTodos(single)
  }

  let editRecord = (id) => {
    let edit = todos.find(val => val.id == id);
    setEditid(id);
    setName(edit.name)
  }

  let changestatus = (id) => {

    let up = todos.map((val, i) => {

      if (val.id === id) {
        return {
          ...val,
          status: val.status === "active" ? ("deactive") : ("active")
        }
      }
      return val

    })
    setTodos(up);

  }

  let active = todos.filter(t => t.status === "active").length;
  let deactive = todos.filter(t => t.status === "deactive").length

  return (
    <div align='center'>

      <h1>Todo List</h1>

      <form onSubmit={handlesubmit}>

        Name :
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={name}></input>
        {
          editid ? (
            <button type="submit">edit</button>
          ) : (
            <button type="submit">Submit</button>
          )
        }
        <h1>todos</h1>
      </form>


      <h2>Active :{active}</h2>
      <h2>Deactive:{deactive}</h2>



      {
        todos.length == 0 ? <h1 style={{ color: "red" }}>data not found</h1> : (
          <table border={1}>
            <thead>
              <tr>
                <td>id</td>
                <td>name</td>
                <td>action</td>
                <td>edit</td>
                <td>Status</td>

              </tr>
            </thead>
            <tbody>
              {
                todos.map((t, i) => {
                  let { id, name } = t;
                  return (
                    <tr key={i}>
                      <td> {id}</td>
                      <td>{name}</td>
                      <td><button onClick={() => editRecord(id)}>Edit</button></td>

                      <td> <button onClick={() => deleteRecord(id)}>delete</button></td>
                      <td>
                        {
                          t.status === "active" ? (
                            <a style={{ color: "green" }} onClick={() => changestatus(t.id)}>{t.status}</a>
                          ) : (
                            <a style={{ color: "red" }} onClick={() => changestatus(t.id)}>{t.status}</a>
                          )
                        }

                      </td>
                    </tr>

                  )

                })
              }
            </tbody>
          </table>
        )
      }


    </div >
  );
}

export default App;
