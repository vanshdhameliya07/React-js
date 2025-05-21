import React from 'react'
import './Banner.css'
const Banner = () => {
    return (
        <div className='contaner'>

            <div className="col-12 d-flex">
                <div className="col-6">
                    <span>100% Organic Fruits</span>
                    <h1>Explore fresh &
                        <br />
                        juicy fruits.</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet reiciendis
                        beatae consequuntur.</p>
                    <button>shop now</button>
                </div>
                <div className="col-6">
                    <img src="https://i.pinimg.com/236x/38/08/f8/3808f8b6dd35d55dbb84e93285e8d2eb.jpg" alt="" />
                </div>

            </div>

        </div>
    )
}

export default Banner
