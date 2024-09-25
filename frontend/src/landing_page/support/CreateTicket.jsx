function CreateTicket() {
    return (
        <div className="container my-5" style={{ width: "75%" }}>
            <div className="row mb-4">
                <h2 className="fs-3 " style={{ fontWeight: "400" }}>To create a ticket, select a relevant topic</h2>
            </div>
            <div className="row ">
                <div className="col-4">
                    <a style={{ color: "#222", textAlign: "center" }} className="text-decoration-none fs-5 " href="#"><i class="fa-solid me-2 fa-circle-plus"></i>Account Opening</a>
                    <div className="p-3 ms-2 mb-3" style={{ lineHeight: "2" }}>
                        <a href="#" className="text-decoration-none">Getting started</a><br />
                        <a href="#" className="text-decoration-none">Online</a><br />
                        <a href="#" className="text-decoration-none">Offline</a><br />
                        <a href="#" className="text-decoration-none">Charges</a><br />
                        <a href="#" className="text-decoration-none">Company, Partnership and HUF</a><br />
                        <a href="#" className="text-decoration-none">Non Resident Indian (NRI)</a>
                    </div>

                </div>
                <div className="col-4">
                    <a style={{ color: "#222", textAlign: "center" }} className="text-decoration-none fs-5 " href="#"><i class="fa-regular me-2 fa-user"></i>  Account Opening</a>
                    <div className="p-3 ms-2 mb-3" style={{ lineHeight: "2" }}>
                        <a href="#" className="text-decoration-none">Login credentials</a><br />
                        <a href="#" className="text-decoration-none">Your Profile</a><br />
                        <a href="#" className="text-decoration-none">Account modification and segment addition</a><br />
                        <a href="#" className="text-decoration-none">CMR & DP ID</a><br />
                        <a href="#" className="text-decoration-none">Nomination</a><br />
                        <a href="#" className="text-decoration-none">Transfer and conversion of shares</a>
                    </div>
                </div>
                <div className="col-4">
                    <a style={{ color: "#222", textAlign: "center" }} className="text-decoration-none fs-5 " href="#"><i class="fa-solid me-2 fa-chart-simple"></i> Trading and Markets</a>
                    <div className="p-3 ms-2 mb-3" style={{ lineHeight: "2" }}>
                        <a href="#" className="text-decoration-none">Trading FAQs</a><br />
                        <a href="#" className="text-decoration-none">Kite</a><br />
                        <a href="#" className="text-decoration-none">Margins</a><br />
                        <a href="#" className="text-decoration-none">Product and order types</a><br />
                        <a href="#" className="text-decoration-none">Corporate actions</a><br />
                        <a href="#" className="text-decoration-none">Kite features</a>
                    </div>

                </div>
            </div>
            {/* ---------------------------------------+++++++++++++++++++----------------------------------------- */}
            <div className="row mb-5">
                <div className="col-4">
                    <a style={{ color: "#222", textAlign: "center" }} className="text-decoration-none fs-5 " href="#"><i class="fa-regular me-2 fa-credit-card"></i>Funds</a>
                    <div className="p-3 ms-2" style={{ lineHeight: "2" }}>
                        <a href="#" className="text-decoration-none">Fund withdrawal</a><br />
                        <a href="#" className="text-decoration-none">Adding funds</a><br />
                        <a href="#" className="text-decoration-none">Adding bank accounts</a><br />
                        <a href="#" className="text-decoration-none">eMandates</a><br />
                    </div>

                </div>
                <div className="col-4">
                    <a style={{ color: "#222", textAlign: "center" }} className="text-decoration-none fs-5 " href="#"><i class="fa-solid me-2 fa-terminal"></i>Funds</a>
                    <div className="p-3 ms-2" style={{ lineHeight: "2" }}>
                        <a href="#" className="text-decoration-none">IPO</a><br />
                        <a href="#" className="text-decoration-none">Portfolio</a><br />
                        <a href="#" className="text-decoration-none">Funds statement</a><br />
                        <a href="#" className="text-decoration-none">Profile</a><br />
                        <a href="#" className="text-decoration-none">Reports</a><br />
                        <a href="#" className="text-decoration-none">Referral program</a><br />
                    </div>
                </div>
                <div className="col-4">

                    <a style={{ color: "#222", textAlign: "center" }} className="text-decoration-none fs-5 " href="#"><i class="fa-regular me-2 fa-credit-card"></i>Coin</a>
                    <div className="p-3 ms-2" style={{ lineHeight: "2" }}>
                        <a href="#" className="text-decoration-none">Understanding mutual funds and Coin</a><br />
                        <a href="#" className="text-decoration-none">Coin app</a><br />
                        <a href="#" className="text-decoration-none">Coin web</a><br />
                        <a href="#" className="text-decoration-none">Transactions and reports</a><br />
                        <a href="#" className="text-decoration-none">National Pension Scheme (NPS)</a><br />
                    </div>
                </div>
            </div>
        </div>
    );
}





export default CreateTicket;