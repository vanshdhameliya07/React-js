import { collection, deleteDoc, doc, getDocs, getFirestore } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { app } from '../../FirebaseConfig'

const View = () => {

    let [alluser, setAlluser] = useState([])
    let navigate = useNavigate()

    const db = getFirestore(app)
    let getuser = async () => {
        try {
            const data = collection(db, 'users')
            const allrecord = await getDocs(data)
            const record = allrecord.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }))
            setAlluser(record)


        } catch (err) {
            console.log(err);
            return false

        }
    }
    useEffect(() => {
        getuser()
    }, [])

    const deleteUser = async (id) => {
        try {
            let deletedata = doc(db, `users/${id}`);
            await deleteDoc(deletedata)
            getuser()

        } catch (err) {
            console.log(err);
            return false

        }
    }



    return (
        <div align="center">
            <h1>View Page</h1>
            <table border={1}>
                <thead>
                    <tr>
                        <td>Id</td>
                        <td>Name</td>
                        <td>email</td>
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        alluser.map((user, index) => {
                            return (
                                <tr key={index}>
                                    <td>{user.userid}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>
                                        <button onClick={() => deleteUser(user.id)}>Delete</button>
                                        <button onClick={() => navigate("/edit", { state: user })}>Edit</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>

            </table>
            <Link to={'/'}>Add</Link>
        </div>
    )
}

export default View
