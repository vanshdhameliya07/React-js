import React from 'react'
import './app.css';

const Recipe = ({ recipe }) => {

    return (
        <>
            <h1>Recipe</h1>

            <table border={1}>
                <thead>
                    <tr>
                        <td>id</td>
                        <td>name</td>
                        <td>ingredients</td>
                        <td>instructions</td>
                        <td>tags</td>
                        <td>image</td>
                        <td>rating</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        recipe.map((val, i) => {
                            return (
                                <tr>
                                    <td>{val.id}</td>
                                    <td>{val.name}</td>
                                    <td>{val.ingredients}</td>
                                    <td>{val.instructions}</td>
                                    <td>{val.tags}</td>
                                    <td>
                                        <img src={val.image} width={"100px"} alt="" />
                                    </td>
                                    <td>{val.rating}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>

        </>
    )
}

export default Recipe
