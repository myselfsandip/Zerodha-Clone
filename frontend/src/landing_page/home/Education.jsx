function Education() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-6">
                    <img  style={{width:"74%"}} src="/images/education.svg" alt="varsity" />
                </div>
                <div className="col-6 mt-5">
                    <h3 className="mb-4">Free and open market education</h3>
                    <p className="my-4">Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                    <a href="#" className="text-center " style={{textDecoration:"none"}}>Varsity  <i class="fa-solid fa-arrow-right"></i></a>
                    <p className="my-4">TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                    <a href="#" className="text-center" style={{textDecoration:"none"}}>TradingQ&A   <i class="fa-solid fa-arrow-right"></i></a>
                </div>
            </div>
        </div>
    );
}

export default Education;