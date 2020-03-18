/*

import React, {useState, useEffect} from 'react';


export default function stationList(props) {
    const [stationData, setStationData] = useState({});

    useEffect(() => {
        const fetchData = () => {
            fetch('https://rata.digitraffic.fi/api/v1/live-trains?station=JNS')
                .then(response => response.json())
                .then(data => setStationData(data))
        }
        fetchData();
    }, [])


    console.log(stationData);


    const liveTrains = ((stationData || {}).trainType || []);
    console.log(liveTrains)
    return <div>
        {JSON.stringify(liveTrains, null, 2)}
    </div>;
}

*/