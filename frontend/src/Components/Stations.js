import React, { useMemo, useState, useEffect } from "react";
import axios from "axios";

import Table from "./Table";
import "./StationTableTrue.css";

/* Custom component to render timeTableRows
const TimeTableRows = ({ values }) => {
	// Loop through the array and create a badge-like component instead of comma-separated string
	return (
		<>
			{values.map((timeTableRows, idx) => {
				return (
					<span key={idx} className="badge">
						{timeTableRows}
					</span>
				);
			})}
		</>
	);
};
*/

function StationTableTrue() {
	/* 
    - Columns is a simple array right now, but it will contain some logic later on. It is recommended by react-table to Memoize the columns data
    - Here in this example, we have grouped our columns into two headers. react-table is flexible enough to create grouped table headers
  */
	const columns = useMemo(
		() => [
			{
				// first group - TV Show
				Header: "Train-y things",
				// First group columns
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
				// Second group - Details
				Header: "Details",
				// Second group columns
				columns: [
					{
						Header: "Departure date",
						accessor: "departureDate",
					},
					{
						Header: "Time table type",
						accessor: "timetableType",
						/* Cell method will provide the cell value, we pass it to render a custom component
						Cell: ({ cell: { value } }) => <TimeTableRows values={value} />,
						*/
					},
					{
						Header: "Running",
						accessor: d => d.runningCurrently.toString(),
					},
					{
						Header: "Cancelled?",
						accessor: d => d.cancelled.toString(),
					},
				],
			},
		],
		[],
	);

	const [data, setData] = useState([]);

	useEffect(() => {
		(async () => {
			const result = await axios("https://rata.digitraffic.fi/api/v1/live-trains?station=JNS");
			setData(result.data);
		})();
	}, []);

	return (
		<div className="App">
			<Table columns={columns} data={data} />
		</div>
	);
}

export default StationTableTrue;