import React from "react";
import matrix from "../data/matrix";

import SideBar from "../components/SideBar";
import Feed from "../components/Feed";

function Matrix(){
    return(
        <div className="container">
            <SideBar content={matrix}/>
            <div className="feed">
                <Feed content={matrix}/>
            </div>
        </div>
    )
}

export default Matrix;