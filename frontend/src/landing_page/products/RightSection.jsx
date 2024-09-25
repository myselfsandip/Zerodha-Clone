function RightSection({imgUrl, productName, productDesc, belowText, belowLink}) {
    return (
        <div className="container px-3 mt-5">
            <div className="row ">
                <div className="col-6 d-flex flex-column justify-content-center ">
                    <h2 className="mb-2">{productName}</h2>
                    <p style={{fontSize: "1.1rem"}} className="lh-lg my-4 w-75">{productDesc}</p>
                    <a className="text-decoration-none " href={belowLink}>{belowText} &nbsp;<i class="fa-solid fa-arrow-right"></i></a>
                </div>
                {/* <div className="col-2"></div> */}
                <div className="col-6">
                    <img src={imgUrl}/>
                </div>
            </div>
        </div>
    );
}

export default RightSection;