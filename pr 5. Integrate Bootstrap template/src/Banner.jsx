import React from 'react'
import './Banner.css'
const Banner = () => {
    return (
        <div className='contaner banner'>

            <div className="col-12 d-flex banner-content align-items-center">

                <div className="col-6">

                    <h2><span>100%</span> Organic Fruits</h2>

                    <h1>Explore fresh &
                        <br />
                        juicy fruits.</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                        <br />

                        reiciendis
                        beatae consequuntur.</p>

                    <div className='btn'>
                        <a href="">shop now</a>
                    </div>
                </div>

                <div className="bg col-6">
                    <img src="./src/assets/img.png" alt="" />
                </div>


            </div>

        </div>
    )
}

export default Banner
