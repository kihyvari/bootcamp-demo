exports.getStationData = data => {
	return fetch("https://rata.digitraffic.fi/api/v1/metadata/stations.geojson")
		.then(function(response) {
			return response.json();
		})
		.then(function(json) {
			console.log("parsed json", json);
			return json;
		})
		.catch(function(ex) {
			console.log("parsing failed", ex);
		});
};


//Old code
/*
export const getStationData = () => fetch("https://rata.digitraffic.fi/api/v1/metadata/stations.geojson")
  .then(response => response.json())
    // Work with JSON data here





fetch('https://rata.digitraffic.fi/api/v1/metadata/stations.geojson')
  .then(response => {
    return response.json()
  })
  .then(data => {
    // Work with JSON data here
    console.log(data)
  })
  .catch(err => {
    // Do something for an error here
  })

*/
