import React from 'react'
import './Menu.css'

const Menu = ({ items }) => {

    return (
        <div className=' justify-content-center' style={{marginLeft:'7px'}}>
            <nav className="navbar mt-5 navbar-expand-lg navbar-light btn-light">

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ">

                        {
                            items.map((val, i) => {
                                return (
                                    <li key={i} className="nav-item active me-5">
                                        <img src={val.img} alt="" />
                                        <a className="nav-link" href="#">{val.item}</a>
                                    </li>

                                )
                            })
                        }

                    </ul>
                </div>
            </nav>

        </div>
    )
}

export default Menu
