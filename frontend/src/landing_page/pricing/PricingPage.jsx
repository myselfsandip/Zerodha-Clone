import OpenAccount from "../OpenAccount";
import Brokerage from "./Brokerage";
import Navbar from "../Navbar";
import Hero from "./Hero";
import Footer from "../Footer";

function PricingPage() {
    return (
        <div>
            <Hero/>
            <OpenAccount/>
            <Brokerage/>
        </div>
    );
}

export default PricingPage;