import './App.css'

function App() {

  let arr1 = [
    { id: 1, name: "jay", phone: 898989898 },
    { id: 2, name: "vijay", phone: 898989898 },
    { id: 3, name: "ajay", phone: 898989898 },
  ];

  return (

    <>

      <table border={1}>
        <thead>
          <tr>
            <td>id</td>
            <td>name</td>
            <td>phone</td>
          </tr>
        </thead>
        <tbody>
          {
            arr1.map((val, i) => {
              let { id, name, phone } = val
              return (
                <tr>
                  <td>{id}</td>
                  <td>{name}</td>
                  <td>{phone}</td>
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
