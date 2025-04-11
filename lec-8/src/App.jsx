import './App.css'

function App() {

  let arr = [

    { id: 1, name: "jay", phone: 89988998989 },
    { id: 2, name: "vjay", phone: 123134688854 },
    { id: 3, name: "ajay", phone: 87411123221 },

  ];


  return (
    <>
      <h1> object destructuring</h1>
      <table border={1} align='center' cellPadding={5}>
        <thead>
          <tr>
            <td>id</td>
            <td>name</td>
            <td>phone</td>
          </tr>
        </thead>
        <tbody>
          {
            arr.map((value, i) => {
              let { id, name, phone } = value;
              return (
                < tr key={id}>
                  <td>{id}</td>
                  <td>{name}</td>
                  <td>{phone}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table >

    </>
  )
}

export default App
