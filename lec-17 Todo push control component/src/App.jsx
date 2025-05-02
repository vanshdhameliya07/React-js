import { useState } from "react";

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
            name: name
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
        name: name
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


  return (
    <div align='center'>
      <h1>Todo List</h1>

      <form onSubmit={handlesubmit}>

        Name :
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={name}></input>
        <button type="submit">Submit</button>
        <h1>todos</h1>
      </form>


      {
        todos.length == 0 ? <h1 style={{ color: "red" }}>data not found</h1> : (
          <table border={1}>
            <thead>
              <tr>
                <td>id</td>
                <td>name</td>
                <td>action</td>
                <td>edit</td>
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
                      <td>
                        <button onClick={() => deleteRecord(id)}>delete</button>
                      </td>
                      <td>
                        <button onClick={() => editRecord(id)}>Edit</button>

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
