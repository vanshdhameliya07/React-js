import React from 'react'

const User = ({ user }) => {
  return (
    <>
      <h1>hello user</h1>


      <table border={1}>
        <thead>
          <tr>
            <td>id</td>
            <td>firstName</td>
            <td>lastName</td>
            <td>maidenName</td>
            <td>age</td>
            <td>gender</td>
            <td>email</td>
            <td>phone</td>
            <td>image</td>
          </tr>
        </thead>
        <tbody>
          {
            user.map((val, i) => {
              return (
                <tr>

                  <td>{val.id}</td>
                  <td>{val.firstName}</td>
                  <td>{val.lastName}</td>
                  <td>{val.maidenName}</td>
                  <td>{val.age}</td>
                  <td>{val.gender}</td>
                  <td>{val.email}</td>
                  <td>{val.phone}</td>
                  <td><img src={val.image} alt="" /></td>
                </tr>
              )
            })
          }
        </tbody>
      </table>

    </>
  )
}

export default User
