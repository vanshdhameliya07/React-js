import React, { useState } from 'react'
import './index.css'

import { category, product } from './data'


const App = () => {

  let [filters, setFilter] = useState([])

  let filter = (name) => {

    if (!name) {
      setFilter(category);
    }
    else {
      let filterd = category.filter(c => c.name == name)
      setFilter(filterd);

    }

  }

  return (
    <>
      <button onClick={() => filter()}>All</button>

      {
        product.map((p, i) => {
          return (
            <button key={i} onClick={() => filter(p.name)}>{p.name}</button>
          )
        })
      }

      <table border={1} align='center'>
        <thead>
          <tr>
            <td>id</td>
            <td>name</td>
            <td>category</td>
          </tr>
        </thead>
        <tbody>
          {
            filters.map((c, i) => {
              let { id, category, name } = c
              return (
                <tr key={i}>
                  <td>{id}</td>
                  <td>{name}</td>
                  <td>{category}</td>
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