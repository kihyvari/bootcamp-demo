import React, {useState, useEffect} from 'react';

export default function Corona(props) {
    const [coronaData, setCoronaData] = useState({});

    useEffect(() => {
        const fetchData = () => {
            fetch('https://w3qa5ydb4l.execute-api.eu-west-1.amazonaws.com/prod/finnishCoronaData')
                .then(response => response.json())
                .then(data => setCoronaData(data))
        }
        fetchData();
    }, [])
    return <div>
        {JSON.stringify(counts, null, 2)}
    </div>;
}
