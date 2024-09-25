function Team() {
    return (
        <div className="container">
            <div className="row mt-2">
                <div className="col">
                    <h2 className="text-center fs-2">People</h2>
                </div>
            </div>
            <div className="row my-5 justify-content-center">
                <div className="col-4 mt-4 text-center">
                    <img src="/images/nithinKamath.jpg" className="rounded-circle" alt="People" style={{width:"60%"}}/>
                    <h3 className="my-4">Nithin Kamath</h3>
                    <p style={{color:"#666666",fontSize:"14px",fontWeight:"500"}}> Founder, CEO</p>
                </div>
                <div className="col-5 mt-3 pt-4" style={{fontSize:"17px"}}>
                    <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>
                    <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>
                    <p>Playing basketball is his zen.</p>
                    <p>Connect on Homepage / TradingQnA / Twitter</p>
                </div>
            </div>
        </div>
    );
}
// height 295px 
export default Team;