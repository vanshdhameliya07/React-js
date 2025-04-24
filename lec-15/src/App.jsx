import { category, product } from "./data"
import './App.css'
import { useState } from "react"


function App() {

  let [filter, setFilter] = useState([])

  const filterdata = (name) => {

    if (!name) {
      setFilter(category);
    } else {
      let filtered = category.filter(c => c.name === name)
      setFilter(filtered);
    }
  }

  return (
    <>
      <button onClick={() => filterdata()}  >All</button>

      {
        product.map((p, i) => {
          return (
            <button key={i} onClick={() => filterdata(p.name)}>{p.name}</button>
          )
        })
      }

      <table align="center" border={1} cellPadding={5} width={"300px"}>
        <thead>
          <tr>
            <td>id</td>
            <td>category</td>
            <td>name</td>
          </tr>
        </thead>
        <tbody>
          {
            filter.map((p, i) => {
              let { id, category, name } = p
              return (
                <tr key={i}>
                  <td>{id}</td>
                  <td>{category}</td>
                  <td>{name}</td>
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
