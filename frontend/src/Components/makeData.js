export default function makeData() {
	fetch("https://rata.digitraffic.fi/api/v1/live-trains?station=JNS")
		.then(response => response.json())
		.then(data => console.log(data));
}
