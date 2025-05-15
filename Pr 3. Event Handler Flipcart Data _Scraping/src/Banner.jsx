import React from 'react'

const Banner = ({ banner }) => {

    return (
        <div>
            {
                banner.map((v, i) => {
                    return (
                        <div key={i} style={{ marginLeft: "25px", marginTop: "20px" }}>
                            <img src={v.img} style={{ width: "1450px", objectFit: "cover" }} alt="" />
                            <br />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Banner
