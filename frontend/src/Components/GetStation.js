import React from "react";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import { Icon } from "leaflet";
import { getStationData } from "./Data/getStationData.js";
import "./MapBox.css";

export const icon = new Icon({
	iconUrl: "/train-station.svg",

	iconSize: [25, 25],
});

// Try to render(?) a map with markers - marker coordinates are supposed to be taken from JSON

export default function GetStation() {
	const [stationData, setStationData] = React.useState(undefined);
	const [activeStation, setActiveStation] = React.useState(null);

	React.useEffect(() => {
		function fetchData() {
			getStationData().then(data => setStationData({...data, features: data.features.filter(feature => feature.properties.passengerTraffic === true)})
			)}
		fetchData();
	}, []);

	/* data.filter(d => d.features.properties.passengerTraffic === true);
  const passengerTrafficFilter = stationData.filter(d => d.features.properties.passengerTraffic === false);
  console.log("passengerTrafficFilter ", passengerTrafficFilter); */

	return (
		<Map center={[62.5, 25.5]} zoom={6}>
			<TileLayer
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
			/>
			{stationData &&
				stationData.features.map(station => (
					<Marker
						key={station.properties.stationUICCode}
						position={[
							station.geometry.coordinates[1],

							station.geometry.coordinates[0],
						]}
						onClick={() => {
							setActiveStation(station);
						}}
						icon={icon}
					/>
				))}

			{activeStation && (
				<Popup
					position={[
						activeStation.geometry.coordinates[1],

						activeStation.geometry.coordinates[0],
					]}
					onClose={() => {
						setActiveStation(null);
					}}
				>
					<div>
						<h2>{"Juna-asema: " + activeStation.properties.stationName}</h2>

						<p>
							{"Matkustajaliikenne: " +
								activeStation.properties.passengerTraffic.toString()}
						</p>
					</div>
				</Popup>
			)}
		</Map>
	);
}

// reference because train icon
// <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
//<div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
