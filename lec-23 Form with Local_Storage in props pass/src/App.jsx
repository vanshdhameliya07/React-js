import { useState } from "react";
import Form from "./Form"
import View from "./View";


function App() {

  let [formInput, setFormInput] = useState({
    name: '',
    email: ''
  })

  let [editid, setEditId] = useState("")

  let [All, setAll] = useState(JSON.parse(localStorage.getItem('users')) || [])

  let handleSubmitFun = (formInput) => {

    let obj = {
      userid: Math.floor(Math.random() * 1000),
      ...formInput
    }

    if (editid != "") {
      let update = All.map((val, i) => {
        if (val.userid == editid) {
          return obj
        }
        return val
      })

      setAll(update)
      localStorage.setItem('users', JSON.stringify(update))
      setEditId("")
    }
    else {
      let oldrecord = [...All, obj]
      setAll(oldrecord)
      localStorage.setItem('users', JSON.stringify(oldrecord))
    }


  }

  let deleteuser = (id) => {
    let Delete = All.filter(val => val.userid != id)
    setAll(Delete)
    localStorage.setItem('users', JSON.stringify(Delete))
    alert("delete user");
  }

  let changeInput = (event) => {
    let { name, value } = event.target

    setFormInput({
      ...formInput,
      [name]: value
    })
  }

  let Edituser = (id) => {
    let edit = All.find(val => val.userid == id)
    setFormInput(edit)
    setEditId(id)
  }


  return (
    <>
      <Form handleSubmitFun={handleSubmitFun}
        changeInput={changeInput}
        formInput={formInput}
      />
      <br />
      <br />

      <View All={All} deleteuser={deleteuser} Edituser={Edituser} />

    </>
  )
}

export default App
