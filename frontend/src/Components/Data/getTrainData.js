exports.getTrainData = data => {
	return fetch("https://rata.digitraffic.fi/api/v1/train-locations.geojson/latest/")
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