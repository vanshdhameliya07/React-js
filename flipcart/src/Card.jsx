import React from 'react'

const Card = ({ card }) => {


    return (


        <>

            <div className=" d-flex flex-wrap mt-4 gap-3">
                {
                    card.map((v, i) => (
                        <>
                            <div className="card mt-3" style={{ width: '200px', height: '270px' }} key={i}>

                                <img src={v.img} style={{ width: '152px', height: '152px', objectFit: 'contain' }} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <p className="card-text">
                                        {v.list}
                                    </p>
                                    <p className="card-text">
                                        {v.money}
                                    </p>

                                </div>
                            </div>
                        </>
                    ))
                }

                <div>
                    <img
                        src="https://rukminim2.flixcart.com/fk-p-flap/530/810/image/ce3cf81edb760559.jpg?q=20"
                        alt="side"
                        style={{ maxHeight: '100%', maxWidth: '220px', objectFit: 'cover' }}
                    />
                </div>

            </div>
        </>
    )
}

export default Card
