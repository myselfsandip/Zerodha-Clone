import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer className="container-fluid border-top" style={{ backgroundColor: "#fbfbfb" }}>
            <div className="container">
                <div className="row m-4">
                    <div className="col">
                        <img src="/images/logo.svg" alt="logo" style={{ width: "50%" }} />
                        <p className="mt-3">&copy;2010 - 2024, Zerodha Broking <br />Ltd. <br /> All rights reserved.</p>
                    </div>
                    <div className="col fw-medium text-muted mx-4"  >
                        <p style={{ color: "#424242" ,fontSize:"18px" }}>Company</p>
                        <a className="text-decoration-none text-muted" href="#">About </a><br />
                        <a className="text-decoration-none text-muted"  href="#">Products</a><br />
                        <a className="text-decoration-none text-muted" href="#">Pricing</a><br />
                        <a className="text-decoration-none text-muted" href="#">Referral programme</a><br />
                        <a className="text-decoration-none text-muted" href="#">Careers</a><br />
                        <a className="text-decoration-none text-muted" href="#">Zerodha.tech</a><br />
                        <a className="text-decoration-none text-muted" href="#">Press & media</a><br />
                        <a className="text-decoration-none text-muted" href="#">Zerodha Cares (CSR)</a>
                    </div>
                    <div className="col fw-medium mx-2">
                        <p style={{ color: "#424242",fontSize:"18px" }}>Support</p>
                        <a className="text-decoration-none text-muted" href="#">Contact us </a><br />
                        <a className="text-decoration-none text-muted" href="#">Support portal</a><br />
                        <a className="text-decoration-none text-muted" href="#">Z-Connect blog</a><br />
                        <a className="text-decoration-none text-muted" href="#">List of charges</a><br />
                        <a className="text-decoration-none text-muted" href="#">Downloads & resources</a><br />
                        <a className="text-decoration-none text-muted" href="#">Videos</a><br />
                        <a className="text-decoration-none text-muted" href="#">Market overview</a><br />
                        <a className="text-decoration-none text-muted" href="#">How to file a complaint?</a><br />
                        <a className="text-decoration-none text-muted" href="#">Status of your complaints</a>
                    </div>
                    <div className="col fw-medium mx-2 mb-5">
                        <p style={{ color: "#424242" , fontSize:"18px"}}>Account</p>
                        <a className="text-decoration-none text-muted" href="#">Open an account</a><br />
                        <a className="text-decoration-none text-muted" href="#">Fund transfer</a>
                    </div>
                </div>
                <div className=" container" style={{ fontSize: "12px",color:"#a1a3a1" }}>
                    <p>Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001 – SEBI Registration no.: INZ000038238 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to complaints@zerodha.com, for DP related to dp@zerodha.com. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF</p>
                    <p>Procedure to file a complaint on SEBI SCORES: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances</p>
                    <p>Smart Online Dispute Resolution | Grievances Redressal Mechanism</p>
                    <p>Investments in securities market are subject to market risks; read all the related documents carefully before investing.</p>
                    <p>Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.</p>
                    <p>"Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, please create a ticket here.</p>
                </div>
                <div className="container mb-4">
                    <div className="row">
                        <div className="col d-flex justify-content-center flex-wrap gap-3" style={{fontSize:"12px",color:"#a1a3a1"}}>
                            <Link style={{color:"#a1a3a1"}} className="text-decoration-none  fw-medium me-3" to="https://www.nseindia.com/">NSE</Link>
                            <a style={{color:"#a1a3a1"}} className="text-decoration-none fw-medium me-3" href="#">BSE</a>
                            <a style={{color:"#a1a3a1"}} className="text-decoration-none fw-medium me-3" href="#">MCX</a>
                            <a style={{color:"#a1a3a1"}} className="text-decoration-none fw-medium me-3" href="#">Terms & conditions</a>
                            <a style={{color:"#a1a3a1"}} className="text-decoration-none fw-medium me-3" href="#">Policies & procedures</a>
                            <a style={{color:"#a1a3a1"}} className="text-decoration-none fw-medium me-3" href="#">Privacy policy</a>
                            <a style={{color:"#a1a3a1"}} className="text-decoration-none fw-medium me-3" href="#">Disclosure</a>
                            <a style={{color:"#a1a3a1"}} className="text-decoration-none fw-medium me-3" href="#">For investor's attention</a>
                            <a style={{color:"#a1a3a1"}} className="text-decoration-none fw-medium me-3" href="#">Investor charter</a>
                        </div>
                    </div>
                </div>


            </div>
        </footer>
    );
}

export default Footer;