import React from 'react'


const Product = ({ product }) => {
    return (
        <div className="container   justify-content-center d-flex flex-wrap mt-5 gap-3">
            {

                product.length == 0 ? (<h1 style={{ color: "red" }}>data is not found</h1>)
                    : (
                        product.map((v, i) => (

                            <div key={i}>

                                <img src={v.img} style={{ width: "400px" }} />

                            </div>

                        ))
                    )
            }

        </div>
    )
}

export default Product
