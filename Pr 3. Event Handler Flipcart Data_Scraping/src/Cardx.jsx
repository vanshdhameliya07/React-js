import React from 'react'

const Cardx = ({ cardx }) => {

    return (
        <div>
            <div className=" d-flex flex-wrap mt-4 gap-3">
                {
                    cardx.map((v, i) => (

                        <div className="card mt-3" style={{ width: '200px', height: '270px' }} key={i}>

                            <img src={v.img} style={{ width: '152px', height: '152px', objectFit: 'contain', marginTop: "10px" }} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <p className="card-text" style={{ fontSize: "13.5px" }}>
                                    {v.list}
                                </p>
                                <p className="card-text">
                                    {v.money}
                                </p>

                            </div>
                        </div>

                    ))
                }



            </div>
        </div>
    )
}

export default Cardx
