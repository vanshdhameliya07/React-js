import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getpost } from './reducer/action/Action'


function App() {

  let dispatch = useDispatch()

  let data = useSelector((state) => state.posts.post)


  useEffect(() => {
    dispatch(getpost())
  }, [])

  return (
    <>

      <table>
        <thead>
          <tr>
            <td>id</td>
            <td>title</td>
          </tr>
        </thead>
        <tbody>
          {
            data.
          }
        </tbody>
      </table>

    </>
  )
}

export default App
