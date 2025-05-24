import './Navbar.css'
import { FaPhoneAlt } from "react-icons/fa";

const Navbar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Category</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Product</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    pages
                                </a>

                            </li>
                            <li class="nav-item">
                                <a class="nav-link disablsed" aria-disabled="true">Blog</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link disablsed" aria-disabled="true">element</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link disablsed" aria-disabled="true">
                                    <FaPhoneAlt />
                                    +123 ( 456 ) ( 7890 )</a>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
