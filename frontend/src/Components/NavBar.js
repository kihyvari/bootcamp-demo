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
                    <Link to="/StationTable">Asemataulukko, Pagination ja Search</Link>
                </li>
                <li>
                    <Link to="/StationTableTrue">Junataulukko JNS-asema</Link>
                </li>
                <li>
                    <Link to="/GetStation">Juna-asemat kartalla</Link>
                </li>
                <li>
                    <Link to="/GetTrains">Junat kartalla</Link>
                </li>
            </ul>
        </div>
    );
}