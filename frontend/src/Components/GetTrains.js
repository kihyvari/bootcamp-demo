import React from "react";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import { Icon } from "leaflet";
import { getTrainData } from "./Data/getTrainData.js";
import "./MapBox.css";

// To test if getStatioData returns JSON

var a = getTrainData();
a.then(result => console.log(result));

export const icon = new Icon({
	iconUrl: "/train.svg",

	iconSize: [25, 25],
});

// Try to render(?) a map with markers - marker coordinates are supposed to be taken from JSON

export default function GetTrain() {
	const [trainData, setTrainData] = React.useState(undefined);
	const [activeTrain, setActiveTrain] = React.useState(null);

	React.useEffect(() => {
		function fetchData() {
      getTrainData().then(data => setTrainData(data))
		};
    fetchData();
  }, []);

  /*
  const passengerTrafficFilter = trainData.filter(d => d.features.properties.passengerTraffic === false);
  console.log("passengerTrafficFilter ", passengerTrafficFilter); */
  
	return (
		<Map center={[62.5, 25.5]} zoom={6}>
			<TileLayer
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
			/>
			{trainData &&
				trainData.features.map(train => (
					<Marker
						key={train.properties.trainNumber}
						position={[
							train.geometry.coordinates[1],

							train.geometry.coordinates[0],
						]}
						onClick={() => {
							setActiveTrain(train);
						}}
						icon={icon}
					/>
				))}

			{activeTrain && (
				<Popup
					position={[
						activeTrain.geometry.coordinates[1],

						activeTrain.geometry.coordinates[0],
					]}
					onClose={() => {
						setActiveTrain(null);
					}}
				>
					<div>
						<h2>{"Junanumero: " + activeTrain.properties.trainNumber}</h2>

						<p>{"Nopeus: " + activeTrain.properties.speed + " km/h"}</p>
					</div>
				</Popup>
			)}
		</Map>
	);
}

// reference because train icon
// <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
//<div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>