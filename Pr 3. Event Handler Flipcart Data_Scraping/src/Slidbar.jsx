import React from 'react'

const Slidbar = ({ slidebar }) => {
    return (

        <div className='mt-3'>
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    {
                        slidebar.map((v, i) => {
                            return (
                                <div
                                    className={`carousel-item ${i === 0 ? 'active' : ''}`}
                                    data-bs-interval="2000" // speed in milliseconds
                                    key={i}
                                >

                                    <img src={v.img} className="d-block w-100" alt={`slide-${i}`} />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>


    )
}

export default Slidbar
