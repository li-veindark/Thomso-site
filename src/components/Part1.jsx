import React from "react";

function Part1() {
    return (
        <div>
            <div className="container text-center Part2">
                <div className="row">
                    <div className="col">
                        <img src="../images/part1.png" alt="3" className="d-none d-xl-block"></img>
                    </div>
                    <div className="col col1 col2">
                        <h3 className="d-none d-xl-block">Create an account</h3>
                        <h1 className="d-none d-xl-block">Create/login to an existing
                            account to get started</h1>
                        <p className="d-none d-xl-block">An account is created with your email
                            and a desired password</p>
                    </div>

                </div>
            </div>

            <div className="row d-flex flex-column-reverse Part2 ">
                <div className="col col-img">
                    <img src="../images/part1.png" alt="3" className="d-xl-none" ></img>
                </div>
                <div className="col col1 col2 ch">
                    <h3 className="d-xl-none">Create an account</h3>
                    <h1 className="d-xl-none">Create/login to an existing
                        account to get started</h1>
                    <p className="d-xl-none">An account is created with your email
                        and a desired password</p>
                </div>


            </div>

        </div>
    )

}

export default Part1;