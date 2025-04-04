import React from 'react'

const Color = ({ colors }) => {
    return (
        <>
            <h1>hello color</h1>


            {
                colors.map((c) => {
                    return (
                        <p style={{ color: c }}>{c}</p>
                    )

                })
            }

        </>
    )
}

export default Color
