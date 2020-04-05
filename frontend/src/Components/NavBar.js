import React from 'react';
import {Link} from "react-router-dom";

import "./NavBar.css";

export default function NavBar(props) {
    return (
        <div className="nav-bar">
            <ul>   
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/stationList">Asemalista (ei oikeasti!)</Link>
                </li>
                <li>
                    <Link to="/StationTable">Taulukkoja, mutta feikkidatasta</Link>
                </li>
                <li>
                    <Link to="/Corona">Koronaa</Link>
                </li>
                <li>
                    <Link to="/StationTableTrue">Tositaulukkoja JNS</Link>
                </li>
                <li>
                    <Link to="/MapBox">Skeittikartta</Link>
                </li>
                <li>
                    <Link to="/GetStation">Asemakartta</Link>
                </li>
                <li>
                    <Link to="/GetTrains">Junat kartalla</Link>
                </li>
            </ul>
        </div>
    );
}