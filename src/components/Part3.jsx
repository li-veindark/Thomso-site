import React from "react";

function Part3() {
    return (
        <div>
            <div className="container text-center Part2 Part3">
                <div className="row">
                    <div className="col">
                        <img src="../images/part3.png" alt="1" className="d-none d-xl-block"></img>

                    </div>
                    <div className="col  col1 col2">
                        <h3 className="d-none d-xl-block" >Checkout</h3>
                        <h1 className="d-none d-xl-block">When you done check out
                            and get it delivered.</h1>
                        <p className="d-none d-xl-block">When you done check out and get it
                            delivered with ease.</p>
                    </div>
                </div>
            </div>


           
                  <div className="row d-flex flex-column-reverse Part2 Part3">
                    <div className="col col-img">
                        <img src="../images/part3.png" alt="1" className="d-xl-none"></img>

                    </div>
                    <div className="col col1 col2 ch">
                        <h3 className="d-xl-none ">Checkout</h3>
                        <h1 className="d-xl-none ">When you done check out
                            and get it delivered.</h1>
                        <p className="d-xl-none ">When you done check out and get it
                            delivered with ease.</p>
                    </div>
                </div>
            </div>
        


    )

}

export default Part3;