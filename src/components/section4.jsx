import React from "react";
import Part2 from "./Part2";
import Part1 from "./Part1";
import Part3 from "./Part3";

function Section4() {
    return (
        <div className="Section4">
        <hr className="d-none d-xl-block hr1"></hr>
        <h1 className="heading">How the app works</h1>
        <hr className="d-xl-none hr2"></hr>
            <Part1 />
            <Part2 />
            <Part3 />
        
        </div>


    )

}


export default Section4;