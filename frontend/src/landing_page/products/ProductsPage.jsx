import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";
import OpenAccount from "../OpenAccount";


function ProductsPage() {
    return (
        <div>
            <Hero/>
            <LeftSection imgUrl="/images/kite.png" productName="Kite" productDesc="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices." googlePlay="#" appStore="#" tryDemo="#" learnMore="#" />
            {/* -----------------------------------++++++++------------------------------------- */}
            <RightSection imgUrl="/images/console.png" productName="Console" productDesc="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations." belowText="Learn more" belowLink="#" />
            {/* -----------------------------------++++++++------------------------------------- */}
            <LeftSection imgUrl="/images/coin.png" productName="Coin" productDesc="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices." googlePlay="#" appStore="#" tryDemo="#" learnMore="#" />
            {/* -----------------------------------++++++++------------------------------------- */}
            <RightSection imgUrl="/images/kiteconnect.png" productName="Kite Connect API" productDesc="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase." belowText="Kite Connect" belowLink="#" />
            {/* -----------------------------------++++++++------------------------------------- */}
            <LeftSection imgUrl="/images/varsity.png" productName="Varsity mobile" productDesc="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go." googlePlay="#" appStore="#" tryDemo="#" learnMore="#" />

            <h5 style={{fontSize: "1.25rem",fontWeight: "400"}} className="text-center my-5 pt-5">Want to know more about our technology stack? Check out the <a href="#" className="text-decoration-none"> Zerodha.tech</a> blog.</h5>
            <Universe/>
        </div>
    );
}

export default ProductsPage;




