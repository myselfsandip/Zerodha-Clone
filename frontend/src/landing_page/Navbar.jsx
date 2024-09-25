import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav class="navbar navbar-expand-lg border-bottom sticky-top " style={{backgroundColor:"#ffffff"}}>
            <div class="container p-2 ">
                <Link class="navbar-brand"  to="/">
                    <img  src="/images/logo.svg" alt="logo" style={{width:"30%"}} />
                </Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="">
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0 fw-normal fw-medium"  style={{gap:"1.5rem"}}>
                            <li class="nav-item">
                                <Link class="nav-link hover-link" aria-current="page" to="/signup">Signup</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link hover-link" to="/about">About</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link hover-link" to="/products">Products</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link hover-link" to="/pricing">Pricing</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link hover-link" to="/support">Support</Link>
                            </li>
                            {/* <li class="nav-item">
                                <Link class="nav-link" to="/"><i class="fa-solid fa-bars"></i></Link>
                            </li> */}
                        </ul>
                    </div>
                </div>

            </div>
        </nav>

    );
}

export default Navbar;