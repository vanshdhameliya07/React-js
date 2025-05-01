import React from 'react'
import { category, product } from './data'


const Filter = ({ filter }) => {
    return (

        <>
            <div className="container  justify-content-center d-flex flex-wrap mt-4 gap-3">
                {
                    filter.map((v, i) => (

                        <div className="card mt-3" style={{ width: '200px', height: '270px' }} key={i}>

                            <img src={v.img} style={{ width: '152px', height: '152px', objectFit: 'contain' }} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <p className="card-text">
                                    {v.category}
                                </p>
                                <p className="card-text">
                                    ₹{v.price}
                                </p>

                            </div>
                        </div>

                    ))
                }



            </div>
        </>


    )
}

export default Filter
