//muutettu stationiksi

import React, { useState, useEffect } from "react";

import Station from "./Station";
import "./Stations.css";

export default function Stations(props) {
    const [stations, setStations] = useState([]);

    useEffect(() => {
        function fetchData() {
            fetch('/api//stationList')
                .then(res => res.json())
                .then(data => setStations(data))
                .catch(err => console.log(err));     
        }
        fetchData();
    }, []);


    const stationElements = stations.map(
        stationData => {
          return <Station
           key={stationData.stationUICCode} 
           type={stationData.type}
           >
                {stationData.key},
                {stationData.passengerTraffic},
                {stationData.stationName},
                {stationData.type},
                {stationData.stationShortCode},
                {stationData.stationUICCode},
                {stationData.countryCode},
                {stationData.longitude},
                {stationData.latitude}
                
           </Station>
        }
    )

    return (
        <React.Fragment>
            <div className="stations">
                {stationElements}
            </div>
        </React.Fragment>
      
    );
}