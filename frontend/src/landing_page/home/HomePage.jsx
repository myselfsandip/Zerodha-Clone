import Awards from "./Awards";
import Hero from "./Hero";
import Pricing from "./Pricing";
import Stats from "./Stats";
import Education from './Education';
import OpenAccount from "../OpenAccount";
import Navbar from "../Navbar"
import Footer from "../Footer"
import "./HomePage.css"

function HomePage() {
    return ( <div>
        <Hero/>
        <Awards/>
        <Stats/>
        <Pricing/>
        <Education/>
        <OpenAccount/>
    </div> );
}

export default HomePage;