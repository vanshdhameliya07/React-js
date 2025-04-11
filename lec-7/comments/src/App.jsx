import { useEffect, useState } from 'react'
import './App.css'
import Comment from './Comment'

function App() {

  let [commentapis, setCommentapis] = useState([])

  let commentapi = () => {
    fetch('https://dummyjson.com/comments')
      .then(res => res.json())
      .then((data) => {
        setCommentapis(data.comments)
      })
  }

  useEffect(() => {
    setTimeout(() => {
      commentapi()
    })
  }, [])

  return (
    <>
      <Comment comment={commentapis} />
    </>
  )
}

export default App
