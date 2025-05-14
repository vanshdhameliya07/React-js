import { useState } from "react"



function App() {

  const [input, setInput] = useState([
    { name: '', email: '' },

  ])

  let add = () => {
    let newfiled = { name: '', email: '' }
    setInput([...input, newfiled])
  }

  let changeinput = (index, e) => {
    const { name, value } = e.target
    let newfiled = [...input]
    newfiled[index][name] = value
    setInput(newfiled)
  };


  let handleSubmit = () => {
    console.log(input);

  }

  let remove = (i) => {
     let remove = input.filter((val, index) => {
      return index != i
    })
    alert('remove')
    setInput(remove)
  }



  return (
    <div align="center" >
      <h1>dynamic form</h1>
      {
        input.map((v, index) => {
          return (
            <div key={index}>
              name < input type="text" name="name" onChange={(e) => changeinput(index, e)} value={v.name} />
              <br />
              <br />
              email < input type="text" name="email" onChange={(e) => changeinput(index, e)} value={v.email} />
              <br />
              <br />
              {
                index != 0 && (<button onClick={() => remove(index)}>remove</button>)
              }



              <br />

              <hr />
            </div>
          )
        })
      }


      <button onClick={() => add()}>add</button>&nbsp;&nbsp;
      <button onClick={() => handleSubmit()}>submit</button>



    </div>
  )
}

export default App
