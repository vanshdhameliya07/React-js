import { useEffect } from 'react'
import './App.css'
import { useState } from 'react'
import User from './User';

function App() {

  let [userapis, setUserapis] = useState([]);


  let userapi = () => {
    fetch('https://dummyjson.com/users')
      .then(res => res.json())
      .then((userdata) => {
        setUserapis(userdata.users)
      })
  }


  useEffect(() => {
    setTimeout(() => {
      userapi()
    })
  }, [])

  return (
    <>
      <User user={userapis} />
    </>
  )
}

export default App
