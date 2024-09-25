function Pricing() {
    return (
        <div className="container p-5 ">
            <div className="row">
                <div className="col-4 p-5">
                    <h2>Unbeatable pricing</h2>
                    <p className="text-muted mt-4">We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                    <a href="#" className="text-center" style={{textDecoration:"none"}}>See pricing <i class="fa-solid fa-arrow-right"></i></a>
                </div>
                <div className="col-2"></div>
                <div className="col-6 p-5">
                    <div className="row">
                        <div className="col-6 text-center p-4 border" >
                            <h1 className="mb-4">&#8377;0</h1>
                            <p>Free equity delivery and <br /> direct mutual funds</p>
                        </div>
                        <div className="col-6 text-center p-4 border" >
                            <h1 className="mb-4">&#8377;20</h1>
                            <p>Intraday and F&O</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Pricing;