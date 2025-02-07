function Stats() {
    return ( 
        <div className="container p-3">
            <div className="row">
                <div className="col-6 p-5">
                    <div className="px-5">
                    <h2 className="mb-5">Trust with confidence</h2>
                    <h4>Customer-first always</h4>
                    <p className="mb-4 pb-2 text-muted">That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.</p>

                    <h4>No spam or gimmicks</h4>
                    <p className="mb-4 pb-2 text-muted">No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.</p>
                    <h4>The Zerodha universe</h4>
                    <p className="mb-4 pb-2 text-muted">Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
                    <h4>Do better with money</h4>
                    <p className="text-muted">With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
                    </div>
                </div>
                <div className="col-6 p-5">
                    <img src="/images/ecosystem.png" alt="EcoSystem" style={{width:"100%"}} />
                    <div className="mx-5">
                        <a href="#" className="text-center mx-5" style={{textDecoration:"none"}}>Explore our products <i class="fa-solid fa-arrow-right"></i></a>
                        <a href="#" className="text-center" style={{textDecoration:"none"}}>Try Kite demo <i class="fa-solid fa-arrow-right"></i></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Stats;