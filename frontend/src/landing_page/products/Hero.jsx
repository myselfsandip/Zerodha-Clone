import { Link } from "react-router-dom";

function Hero() {
    return (
        <div className="container p-5 mb-5 border-bottom" >
            <div className="row">
                <div className="col text-center mb-5">
                    <h1 className="p-3 fs-1">Technology</h1>
                    <h2 className="p-2 fs-5 fw-normal">Sleek, modern, and intuitive trading platforms</h2>
                    <p className="p-2">Check out our <Link to="#"  className="text-decoration-none ">investment offerings <i  className="fa-solid fa-arrow-right"></i></Link></p>
                </div>
            </div>
        </div>
    );
}

export default Hero;