import { useState } from 'react';
import './App.css'
import { useEffect } from 'react';

function App() {

  let [data, setData] = useState([])

  let getapi = () => {
    fetch('http://localhost:4000/cc')
      .then(res => res.json())
      .then((data) => {
        setData(data);

      })
  }

  useEffect(() => {
    setTimeout(() => {
      getapi()
    })
  }, [])

  return (
    <>

      <table border={1}>
        <thead>
          <tr>
            <td>id</td>
            <td>name</td>
            <td>age</td>
          </tr>
        </thead>
        <tbody>
          {
            data.map((d, i) => {
              return (
                <tr key={i}>
                  <td>{d.id}</td>
                  <td>{d.name}</td>
                  <td>{d.age}</td>
                </tr>
              )

            })
          }
        </tbody>
      </table>
    </>

  )
}

export default App
