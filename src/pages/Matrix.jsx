import React from "react";
import matrix from "../data/matrix";

import SideBar from "../components/SideBar";
import Feed from "../components/Feed";

import { selectDarkMood } from "../reducers/darkMood";
import { useSelector } from "react-redux";

import '../assets/styles/pages/Matrix.css';

function Matrix(){
    const darkMoodObj = useSelector(selectDarkMood);
    const darkMood = darkMoodObj.darkMood;

    return(
        <div className={`container ${darkMood === "true" && "container__dark-mood"}`}>
            <SideBar content={matrix}/>
            <div className="feed">
                <Feed content={matrix}/>
            </div>
        </div>
    )
}

export default Matrix;
