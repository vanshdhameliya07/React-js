import React from 'react'

const Header = ({ menu }) => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg" alt="" />

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <form className="d-flex me-auto w-50" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search for Product , Brands and More" aria-label="Search" />
                        </form>

                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            {menu.map((val, i) => (
                                <li className="nav-item" key={i}>
                                    <a className="nav-link active" aria-current="page" href="#">{val.item}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </nav>
        </div>

        

    )
}

export default Header
