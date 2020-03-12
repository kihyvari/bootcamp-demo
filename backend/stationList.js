const stationList = [
  {
    "passengerTraffic": false,
    "type": "STATION",
    "stationName": "Ahonpää",
    "stationShortCode": "AHO",
    "stationUICCode": 1343,
    "countryCode": "FI",
    "longitude": 25.006783,
    "latitude": 64.53711800000001
  }
];

const getStations = (req, res) => res.send(stationList);

module.exports = {
    getStations
};