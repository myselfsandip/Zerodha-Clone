
function LeftSection({ imgUrl, productName, productDesc, tryDemo, learnMore, googlePlay, appStore }) {
    return (
        <div className="container my-4 mb-3 pt-5">
            <div className="row ">
                <div className="col-5 ">
                    <img src={imgUrl} alt="Product" />
                </div>
                <div className="col-2"></div>
                <div className="col-5 pt-5">
                    <h2 className="mb-2">{productName}</h2>
                    <p style={{fontSize: "1.1rem"}} className="lh-lg my-4 w-75">{productDesc}</p>
                    <div className="mt-3 mb-4">
                        <a href={tryDemo} className="text-decoration-none me-4">Try demo &nbsp;<i class="fa-solid fa-arrow-right"></i></a>
                        <a href={learnMore} className="text-decoration-none ">Learn more &nbsp;<i class="fa-solid fa-arrow-right"></i></a>
                    </div>
                    <div className="mt-4" >
                        <a href={googlePlay} className="me-3"><img src="/images/googlePlayBadge.svg" /></a>
                        <a href={appStore}><img src="/images/appstoreBadge.svg" /></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LeftSection;