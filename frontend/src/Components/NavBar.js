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
            </ul>
        </div>
    );
}