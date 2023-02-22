import React from "react";

function Part2() {
    return (
        <div>
            <div className="container text-center Part2">
                <div className="row">
                    <div className="col col1">
                        <h3 className="d-none d-xl-block">Explore varieties</h3>
                        <h1 className="d-none d-xl-block">Shop for your favorites meal as e dey hot.</h1>
                        <p className="d-none d-xl-block">Shop for your favorite meals or drinks and enjoy while doing it.</p>
                    </div>

                    <div className="col">
                        <img src="../images/Phone part2.png" alt="2"className="d-none d-xl-block"></img>

                    </div>
                </div>
            </div>


            <div className="row row d-flex flex-column-reverse Part2">
                <div className="col col-img">
                    <img src="../images/Phone part2.png" alt="2" className="d-xl-none" ></img>

                </div>

                <div className="col col1 col2  ch">
                    <h3 className="d-xl-none">Explore varieties</h3>
                    <h1 className="d-xl-none">Shop for your favorites meal as e dey hot.</h1>
                    <p className="d-xl-none">Shop for your favorite meals or drinks and enjoy while doing it.</p>
                </div>

            </div>
        </div>




    )

}

export default Part2;