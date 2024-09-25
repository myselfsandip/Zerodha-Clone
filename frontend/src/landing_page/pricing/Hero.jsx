function Hero() {
    return (
        <div className="container border-bottom p-5 mb-3">
            <div className="row  text-center">
                <div className="col mb-5 pb-3">
                    <h1 className="mt-4 mb-3" style={{ fontSize: "2.7rem", lineHeight: "1.5" }}>Pricing</h1>
                    <h5 style={{ color: "#424242", fontSize: "1.25rem", fontWeight: "400" }}>Free equity investments and flat ₹20 intraday and F&O trades</h5>
                </div>
            </div>
            {/* ----------------------------++++++++++++++++++++++++++++++------------------------------------ */}
            <div className="row   border-top justify-content-center">
                <div className="col-4 mt-5 pt-5 text-center">
                    <img style={{ height: "250px", maxWidth: "100%" }} src="/images/pricingEquity.svg" />
                    <h3 className="my-4">Free equity delivery</h3>
                    <p className="text-muted mb-2 px-4" style={{fontSize: "1rem",lineHeight: "1.8"}}>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                </div>
                <div className="col-4 mt-5 pt-5 text-center">
                    <img style={{ height: "250px", maxWidth: "100%" }} src="/images/intradayTrades.svg" />
                    <h3 className="my-4">Intraday and F&O trades</h3>
                    <p className="text-muted mb-2 px-4" style={{fontSize: "1rem",lineHeight: "1.8"}}>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                </div>
                <div className="col-4 mt-5 pt-5 text-center">
                    <img style={{ height: "250px", maxWidth: "100%" }} src="/images/pricingEquity.svg" />
                    <h3 className="my-4">Free direct MF</h3>
                    <p className="text-muted mb-2 px-4" style={{fontSize: "1rem",lineHeight: "1.8"}}>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                </div>
                
            </div>
        </div>
    );
}

export default Hero;