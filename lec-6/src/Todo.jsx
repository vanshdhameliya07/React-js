import { useState } from "react"
import Color from "./Color"

let Todo = ({ todo }) => {

    let [color, setColor] = useState(["red", "pink", "blue"])


    return (
        <>
            <h1>todo</h1>

            <table align="center" border={1} cellPadding={5} cellSpacing={3}>
                <thead>
                    <tr>
                        <td>id</td>
                        <td>name</td>
                        <td>phones</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        todo.map((val, i) => {

                            return (
                                <tr>
                                    <td>{val.id}</td>
                                    <td>{val.name}</td>
                                    <td>{val.phone}</td>
                                </tr>

                            )
                        })
                    }
                </tbody>
            </table>

            <Color colors={color}/>

        </>

    )
}


export default Todo