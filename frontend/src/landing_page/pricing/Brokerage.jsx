function Brokerage() {
    return (
        <div className="container" style={{ maxWidth: "70%" }}>
            <div className="row text-center mt-5 mb-4 px-5">
                <div className="col-4">
                    <a href="#" className="text-decoration-none fs-5" >Brokerage calculator</a>
                </div>
                <div className="col-4"></div>
                <div className="col-4">
                    <a href="#" className="text-decoration-none fs-5"  >List of charges</a>
                </div>
            </div>
            <div className="row"> 
                <div className="col text-muted mt-3 mb-5 pb-3">
                    <ul style={{fontSize:"12px",lineHeight:"2"}}>
                        <li>Call & Trade and RMS auto-squareoff: Additional charges of ₹50 + GST per order.</li>
                        <li>Digital contract notes will be sent via e-mail.</li>
                        <li>Physical copies of contract notes, if required, shall be charged ₹20 per contract note. Courier charges apply.</li>
                        <li>For NRI account (non-PIS), 0.5% or ₹100 per executed order for equity (whichever is lower).</li>
                        <li>For NRI account (PIS), 0.5% or ₹200 per executed order for equity (whichever is lower).</li>
                        <li>If the account is in debit balance, any order placed will be charged ₹40 per executed order instead of ₹20 per executed order.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Brokerage;