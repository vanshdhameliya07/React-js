import { useEffect, useState } from 'react'
import { app } from '../../FirebaseConfig'
import { addDoc, collection, deleteDoc, doc, getDocs, getFirestore } from 'firebase/firestore'
import './Add.css'
const Add = () => {

    let [forminput, setForminput] = useState({
        todo: ''
    })

    let [alluser, setAlluser] = useState([])

    let changeInput = (event) => {
        let { name, value } = event.target
        setForminput({
            ...forminput,
            [name]: value
        })
    }

    let db = getFirestore(app)

    let handleSubmit = async (event) => {
        event.preventDefault()
        try {
            let record = await addDoc(collection(db, 'user'), {
                userid: Math.floor(Math.random() * 1000),
                todo: forminput.todo
            })

            alert("user add")

        } catch (err) {
            console.log(err);
            return false

        }

    }


    let getuser = async () => {
        try {
            const data = collection(db, 'user')
            const allrecord = await getDocs(data)
            const record = allrecord.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }))
            setAlluser(record);


        } catch (err) {
            console.log(err);
            return false
        }

    }

    useEffect(() => {
        getuser()
    }, [])

    let deleteUser = async (id) => {
        try {
            let deleteuser = doc(db, (`user/${id}`))
            await deleteDoc(deleteuser)
            getuser()
        } catch (err) {
            console.log(err);

            return false

        }
    }

    return (
        <div align="center">
            <h1>Todo list</h1>
            <form onSubmit={handleSubmit}>
                <table border={1}>
                    <thead>
                        <tr>
                            <td>Add todo</td>
                            <td><input type="text" name="todo" onChange={changeInput} value={forminput.todo} /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><input type="submit" /></td>
                        </tr>
                    </thead>

                </table>
            </form>


            <br />
            <br />
            <br />

            <table border={1}>
                <thead>
                    <tr>
                        <td>id</td>
                        <td>Todo</td>
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        alluser.map((user, index) => {
                            return (
                                <tr key={index}>
                                    <td>{user.userid}</td>
                                    <td>{user.todo}</td>
                                    <td>
                                        <button onClick={() => deleteUser(user.id)}>Remove</button>
                                    </td>
                                </tr>
                            )
                        })

                    }
                </tbody>
            </table>


        </div>
    )
}

export default Add
