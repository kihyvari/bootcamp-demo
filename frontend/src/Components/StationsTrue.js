/*
import React, { useState, useEffect } from "react";

// import Station from "./Station";
// import "./Stations.css";

// HUOM JNS ASEMAN LÄPI KULKEVAT JUNAT
const url = 'https://rata.digitraffic.fi/api/v1/live-trains?station=JNS';

export default function getData(url) {
    return fetch(url)
        .then(response => response.json())       
};
    
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