function Hero() {
    return (
        <section className="container-fluid " style={{ backgroundColor: "#387ed1",marginTop:"0" }}>
            <div className="container w-75 text-white" >
                <div className="py-5  row">
                    <div className="col-2"><h5 style={{ color: "#fff" }}>Support Portal</h5></div>
                    <div className="col-8"></div>
                    <div className="col-2 trackTicket"><a style={{ color: "#fff", textDecoration: "none",borderBottom:"1px solid #fff" }} href="#">Track tickets</a></div>
                </div>
                <div className="row pb-5">
                    <div className="col-6">
                        <h4 style={{ color: "#fff" }}>Search for an answer or browse help topics to create a ticket</h4>
                        <div className="my-4" style={{ backgroundColor: "#fff", borderRadius: "2px", display: "inline-block", position: "relative", width: "100%" }}>
                            <input style={{ border: "none", outline: "none", width: "95%", height: "3rem", paddingLeft: "20px", lineHeight: "2.3" }} type="text" />
                            <i style={{ color: "black" }} class="fa-solid fa-magnifying-glass"></i>
                        </div>
                        <div style={{ fontSize: "1rem" }}>
                            <p style={{ display: "inline-block" }}><a className="me-3 pb-1" style={{ color: "#fff", textDecoration: "none", borderBottom: "1px solid #fff" }} href="">Track account opening</a></p>
                            <p style={{ display: "inline-block" }}><a className="me-3 pb-1" style={{ color: "#fff", textDecoration: "none", borderBottom: "1px solid #fff" }} href="">Track segment activation</a></p>
                            <p style={{ display: "inline-block" }}><a className="me-3 pb-1" style={{ color: "#fff", textDecoration: "none", borderBottom: "1px solid #fff" }} href="">Intraday margins</a> <br /></p>
                            <p style={{ display: "inline-block" }}><a className="me-3 pb-1 mt-3" style={{ color: "#fff", textDecoration: "none", borderBottom: "1px solid #fff" }} href="">Kite user manual</a></p>
                        </div>
                    </div>
                    <div className="col-6 ps-5">
                        <h4 className="ps-5" style={{ color: "#fff" }}>Featured</h4>
                        <div className="ps-5">
                            <ol style={{ textDecoration: "underline", lineHeight: "2.3" }}>
                                <li >
                                    <a style={{ color: "#fff", textDecoration: "none" }} href="">Current Buybacks - August 2024</a>
                                </li>
                                <li>
                                    <a style={{ color: "#fff", textDecoration: "none" }} href="">Offer for sale (OFS) - August 2024</a>
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;


