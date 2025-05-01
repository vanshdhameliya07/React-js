import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [todos, setTodos] = useState([]);

  const handlesubmit = () => {


    const obj = {
      id: Math.floor(Math.random() * 1000),
      name: name
    };

    setTodos([...todos, obj]);
    setName("");
  };

  return (
    <div align='center'>
      <h1>Todo List</h1>

      <table border={1}>
        <thead>
          <tr>
            <td>Name</td>
            <td>
              <input
                type="text"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />

            </td>
          </tr>
          <tr>
            <td></td>

            <td><button onClick={handlesubmit}>Submit</button></td>
          </tr>
          <h1>todos</h1>
          <tr>
            <td>id</td>
            <td>name</td>
          </tr>

        </thead>
        <tbody>
          {
            todos.map((todo, i) => (
              <tr key={i}>
                <td>{todo.id}</td>
                <td>{todo.name}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
}

export default App;
