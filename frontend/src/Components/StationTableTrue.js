import React, { useMemo, useState, useEffect } from "react";
import axios from "axios";

import Table from "./Table";
import "./StationTableTrue.css";

function StationTableTrue() {
	/* 
    - Columns is a simple array right now, but it will contain some logic later on. It is recommended by react-table to Memoize the columns data
    - Here in this example, we have grouped our columns into two headers. react-table is flexible enough to create grouped table headers
  */
	const columns = useMemo(
		() => [
			{
				Header: "Train",
				columns: [
					{
						Header: "Train type",
						accessor: "trainType",
					},
					{
						Header: "Train number",
						accessor: "trainNumber",
					},
				],
			},
			{
				Header: "Status",
				columns: [
					{
						Header: "Running",
						accessor: (d) => d.runningCurrently.toString(),
					},
					{
						Header: "Cancelled",
						accessor: (d) => d.cancelled.toString(),
					},
				],
			},
			{
				Header: "Time table",
				columns: [
					{
						Header: "Departure station",
						accessor: "timeTableRows[0].stationShortCode",
					},
					{
						Header: "Departure time",
						accessor: (d) => d.timeTableRows[0].scheduledTime.toLocaleString(),
					},
					{
						Header: "Arrival station",
						accessor: (d) =>
							d.timeTableRows[d.timeTableRows.length - 1].stationShortCode,
					},
					{
						Header: "Arrival time",
						accessor: (d) =>
							d.timeTableRows[d.timeTableRows.length - 1].scheduledTime,
					},
				],
			},
		],
		[],
	);

	const [data, setData] = useState([]);

	useEffect(() => {
		(async () => {
			const result = await axios(
				"https://rata.digitraffic.fi/api/v1/live-trains/station/JNS?arrived_trains=5&arriving_trains=5&departed_trains=5&departing_trains=5&include_nonstopping=false&train_categories=Commuter,Long-distance",
			);
			setData(result.data);
		})();
	}, []);

	return (
		
		<div className="App">
		<p className="stationTableTrue">
		Joensuun juna-aseman kautta kulkevat junat 
		</p>
			<Table columns={columns} data={data} />
		</div>
	);
}

export default StationTableTrue;
