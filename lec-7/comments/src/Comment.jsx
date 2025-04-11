import React from 'react'


const Comment = ({ comment }) => {
    console.log(comment)
    return (
        <>
            <h1>comment api</h1>

            <table border={1} cellPadding={4}>
                <thead>
                    <tr>
                        <td>id</td>
                        <td>body</td>
                        <td>likes</td>
                        <td>postid</td>
                        <td>username</td>
                        <td>fullName</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        comment.map((val, i) => {
                            return (
                                <tr>
                                    <td>{val.id}</td>
                                    <td>{val.body}</td>
                                    <td>{val.likes}</td>
                                    <td>{val.postId}</td>
                                    <td>{val.user.username}</td>
                                    <td>{val.user.fullName}</td>

                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>

        </>
    )
}

export default Comment
