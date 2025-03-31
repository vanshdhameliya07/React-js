import React from 'react'

const Home = ({ aa, colorr, sum }) => {

    return (
        <>
            <h1>hello</h1>
            <h1>a:- {aa}</h1>
            <ul>

                {
                    colorr.map((c) => {
                        return (
                            <h1 style={{ color: c }}>{c}</h1>
                        )
                    })
                }

            </ul>

            <h1>sum : {sum()}</h1>
        </>

    )
}

export default Home
