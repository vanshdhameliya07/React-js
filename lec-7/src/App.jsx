import { useEffect, useState } from 'react'
import './index.css'

function App() {

  let [getrecipes, setGetrecipe] = useState([])


  let getrecipe = () => {
    fetch('https://dummyjson.com/recipes')
      .then(res => res.json())
      .then((data) => {
        setGetrecipe(data.recipes);

      })
  }

  useEffect(() => {
    setTimeout(() => {
      getrecipe()
    })
  }, [])

  return (
    <>
      <div>

      </div>


      <table align="center" border={1} cellPadding={5} cellSpacing={1}>
        <thead>
          <tr>
            <td>id</td>
            <td>name</td>
            <td>image</td>
            <td>ingredients</td>
            <td>mealType
            </td>
            <td>rating
            </td>
            <td>tags</td>
          </tr>
        </thead>
        <tbody>
          {
            getrecipes.map((val, i) => {
              return (
                <tr key={val.id}>
                  <td>{val.id}</td>
                  <td>{val.name}</td>
                  <td>
                    <img src={val.image} width="100" alt="" />
                  </td>
                  <td>
                    {val.ingredients.join(" - ")}
                  </td>
                  <td>
                    {val.mealType
                    }
                  </td>
                  <td>{val.rating}</td>
                  <td>
                    {val.tags.join("-")}
                  </td>
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
