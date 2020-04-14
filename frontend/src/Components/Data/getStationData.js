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

