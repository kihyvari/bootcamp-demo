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
  },
  {
    "passengerTraffic": false,
    "type": "STATION",
    "stationName": "Ahvenus",
    "stationShortCode": "AHV",
    "stationUICCode": 1000,
    "countryCode": "FI",
    "longitude": 22.498185,
    "latitude": 61.291923
  },
  {
    "passengerTraffic": true,
    "type": "STOPPING_POINT",
    "stationName": "Ainola",
    "stationShortCode": "AIN",
    "stationUICCode": 628,
    "countryCode": "FI",
    "longitude": 25.101494,
    "latitude": 60.456863
  }
];

const getStations = (req, res) => res.send(stationList);

module.exports = {
    getStations
};