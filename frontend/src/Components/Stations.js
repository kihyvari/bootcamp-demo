/*
import React, { useState, useEffect } from "react";

// import Station from "./Station";
// import "./Stations.css";

// HUOM JNS ASEMAN LÄPI KULKEVAT JUNAT

export default function Stations(props) {
    const setStations = useState([]);

    useEffect(() => {
        function fetchData() {
            fetch('https://rata.digitraffic.fi/api/v1/live-trains?station=JNS')
                .then(res => res.json())
                .then(data => setStations(data))
                .catch(err => console.log(err));     
        }
        fetchData();
    }, []);

    
/*
    const stationElements = stations.map(
        stationData => {
          return <Station
           key={stationData.operatorUICCode} 
           >
                {stationData.trainNumber},
                {stationData.trainType},
                {stationData.runningCurrently},
                {stationData.cancelled},
                {stationData.stationShortCode}                
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

*/