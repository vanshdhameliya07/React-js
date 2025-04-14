import React from 'react'

const Post = ({ post }) => {
    return (
        <>
            <h1>post api</h1>


            <table border={1}>
                <thead>
                    <tr>
                        <td>id</td>
                        <td>title</td>
                        <td>body</td>
                        <td>tags</td>
                        <td>reactions</td>
                        <td>views</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        post.map((val, i) => {
                            return (
                                <tr>
                                    <td>{val.id}</td>
                                    <td>{val.title}</td>
                                    <td>{val.body}</td>
                                    <td>{val.tags}</td>
                                    <td>like : {val.reactions?.likes}like : {val.reactions?.dislikes}
                                    </td>
                                    <td>{val.views}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>

        </>
    )
}

export default Post
