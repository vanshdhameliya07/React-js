import { useState } from "react"

function App() {

  let [formInput, setFormInput] = useState([
    { name: "", email: "" },

  ])


  let add = () => {
    let newfiled = { name: '', email: '' }
    setFormInput([...formInput, newfiled])
  }

  let remove = (i) => {
    let remove = formInput.filter((val, index) => {
      return index != i

    })
    alert('remove')
    setFormInput(remove)
  }

  let changeinput = (index, event) => {

    let { name, value } = event.target
    let newfiled = [...formInput]
    newfiled[index][name] = value
    setFormInput(newfiled)


  }

  let handleSubmit = () => {
    console.log(formInput);

  }

  return (
    <>

      <div align="center">
        <h1>form validation</h1>

        {
          formInput.map((val, index) => {
            return (
              <div key={index}>


                name < input type="text" name="name" onChange={(event) => changeinput(index, event)} value={val.name} />
                <br />
                <br />
                email < input type="text" name="email" onChange={(event) => changeinput(index, event)} value={val.email} />
                <br />
                <br />
                {
                  index != 0 && (<button onClick={() => remove(index)}>remove</button>)
                }



                <br />

                <hr />
              </div >
            )
          })
        }
        <br />
        <button onClick={() => add()}>add</button>
        <input onClick={() => handleSubmit()} type="submit" />
      </div >
    </>
  )
}

export default App
