import { useEffect, useState } from 'react'
import './App.css'
import Post from './Post'

function App() {

  let [getposts, setGetpost] = useState([])

  let getpost = () => {
    fetch('https://dummyjson.com/posts')
      .then(res => res.json())
      .then((data) => {
        setGetpost(data.posts)
        console.log(data.posts)
      })
  }

  useEffect(() => {
    setTimeout(() => {
      getpost()
    });
  }, [])

  return (
    <>
      <Post post={getposts} />
    </>
  )
}

export default App
