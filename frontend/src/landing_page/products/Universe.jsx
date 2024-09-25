function Universe() {
    return (
        <div className="container my-5 pt-5">
            <div className="row mt-3">
                <div className="col text-center">
                    <h2>The Zerodha Universe</h2>
                    <p style={{ fontSize: "1rem", lineHeight: "1.8" }}>Extend your trading and investment experience even further with our partner platforms</p>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-4 text-center">
                    <div >
                        <img style={{ height: "55px", maxWidth: "100%" }} src="/images/zerodhaFundhouse.png" />
                        <p className="px-5 mt-4" style={{ fontSize: "12px", color: "#a1a3a1" }}>Our asset management venture <br />that is creating simple and transparent index <br /> funds to help you save for your goals.</p>
                    </div>
                    <div className="mt-5 pt-3">
                        <img style={{ height: "55px", maxWidth: "100%" }} src="/images/streakLogo.png" />
                        <p className="px-5 mt-4" style={{ fontSize: "12px", color: "#a1a3a1" }}>Our asset management venture <br />that is creating simple and transparent index <br /> funds to help you save for your goals.</p>
                    </div>
                </div>
                <div className="col-4 text-center">
                    <div>
                        <img style={{ height: "50px", maxWidth: "100%" }} src="/images/sensibullLogo.svg" />
                        <p className="px-5 mt-4" style={{ fontSize: "12px", color: "#a1a3a1" }}>Options trading platform that lets you <br />
                            create strategies, analyze positions, and examine <br />
                            data points like open interest, FII/DII, and more.
                        </p>
                    </div>
                    <div className="mt-5 pt-3">
                        <img style={{ height: "55px", maxWidth: "100%" }} src="/images/smallcaseLogo.png" />
                        <p className="px-5 mt-4" style={{ fontSize: "12px", color: "#a1a3a1" }}>Our asset management venture <br />that is creating simple and transparent index <br /> funds to help you save for your goals.</p>
                    </div>
                </div>
                <div className="col-4 text-center">
                    <div>
                        <img style={{ height: "55px", maxWidth: "100%" }} src="/images/tijori.svg" />
                        <p className="px-5 mt-4" style={{ fontSize: "12px", color: "#a1a3a1" }}>Investment research platform <br />
                            that offers detailed insights on stocks, <br />
                            sectors, supply chains, and more.
                        </p>
                    </div>
                    <div className="mt-5 pt-3">
                        <img style={{ height: "55px", maxWidth: "100%" }} src="/images/dittoLogo.png" />
                        <p className="px-5 mt-4" style={{ fontSize: "12px", color: "#a1a3a1" }}>Our asset management venture <br />that is creating simple and transparent index <br /> funds to help you save for your goals.</p>
                    </div>
                </div>
                <button className="p-2 btn btn-primary fs-5 my-5" style={{ width: "12rem", margin: "0 auto" }}>Sign up for free</button>
            </div>
        </div>
    );
}

export default Universe;