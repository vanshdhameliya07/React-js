import { useState } from "react"

function App() {

  let [formInput, setFormInput] = useState([
    { name: "", email: "", salary: '' },

  ])


  let add = () => {
    let newfiled = { name: '', email: '', salary: '' }
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

      <div style={styles.container}>
        <h1 style={styles.title}> Dynamic Form</h1>

        {formInput.map((val, index) => (
          <div key={index} style={styles.card}>
            <div style={styles.inputGroup}>
              <label>Name</label>
              <input type="text" name="name" value={val.name} onChange={(e) => changeinput(index, e)} style={styles.input} placeholder="Enter name"
              />
            </div>

            <div style={styles.inputGroup}>
              <label>Email</label>
              <input type="email" name="email" value={val.email} onChange={(e) => changeinput(index, e)} style={styles.input} placeholder="Enter email"
              />
            </div>

            <div style={styles.inputGroup}>
              <label>salary</label>
              <input type="email" name="salary" value={val.salary} onChange={(e) => changeinput(index, e)} style={styles.input} placeholder="Enter salary"
              />
            </div>

            {index !== 0 && (<button onClick={() => remove(index)} style={styles.removeBtn}>Remove</button>)}
          </div>
        ))}

        <div style={styles.buttonGroup}>
          <button onClick={add} style={styles.addBtn}>
            Add Field
          </button>
          <button onClick={handleSubmit} style={styles.submitBtn}>
            Submit
          </button>
        </div>
      </div>

    </>
  )
}

const styles = {
  container: {
    maxWidth: "600px",
    margin: "30px auto",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
    textAlign: "center",
  },
  title: {
    color: "#3b82f6",
    marginBottom: "20px",
  },
  card: {
    background: "#f0f4f8",
    padding: "15px",
    borderRadius: "12px",
    marginBottom: "20px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    transition: "0.3s ease-in-out",
  },
  inputGroup: {
    marginBottom: "10px",
    textAlign: "left",
  },
  input: {
    width: "90%",
    padding: "10px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    marginTop: "4px",
    

  },
  removeBtn: {
    backgroundColor: "#ef4444",
    color: "white",
    border: "none",
    padding: "8px 16px",
    borderRadius: "8px",
    cursor: "pointer",
    marginTop: "10px",
  },
  addBtn: {
    backgroundColor: "#10b981",
    color: "white",
    border: "none",
    padding: "10px 18px",
    borderRadius: "8px",
    cursor: "pointer",
    marginRight: "10px",
  },
  submitBtn: {
    backgroundColor: "#3b82f6",
    color: "white",
    border: "none",
    padding: "10px 18px",
    borderRadius: "8px",
    cursor: "pointer",
  },
  buttonGroup: {
    marginTop: "30px",
  },


}

export default App
