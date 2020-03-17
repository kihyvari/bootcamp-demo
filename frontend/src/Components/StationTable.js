import React from "react";
// import { useTable } from "react-table";

import styled from "styled-components";
import Table from "./Table"
import fakeData from './fakeData.json'

// const fakeData = require('./fakeData.json')

const Styles = styled.div`
	padding: 1rem;

	table {
		border-spacing: 0;
		border: 1px solid black;

		tr {
			:last-child {
				td {
					border-bottom: 0;
				}
			}
		}

		th,
		td {
			margin: 0;
			padding: 0.5rem;
			border-bottom: 1px solid black;
			border-right: 1px solid black;

			:last-child {
				border-right: 0;
			}
		}
	}
`;


/*
export default function NavBar(props) {
    return (
        <div className="nav-bar">
            <ul>   
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/stationList">Asemalista (ei oikeasti!)</Link>
                </li>
            </ul>
        </div>
    );
}
*/

export default function StationTable() {
	const columns = React.useMemo(
		() => [
			{
				Header: "Type",
				accessor: "type",
			},
			{
				Header: "Passenger traffic",
				id: "passengerTraffic",
				accessor: d => d.passengerTraffic.toString(),
			},

			{
				Header: "Station name",
				accessor: "stationName",
			},
			{
				Header: "ID",
				accessor: "stationUICCode",
			},
			{
				Header: "Longitude",
				accessor: "longitude",
			},
			{
				Header: "Latitude",
				accessor: "latitude",
			},
		],

		[],
    );
    
    // const data = React.useMemo(() => makeData(20), [])
	
	 
	return (
		<Styles>
			<Table columns={columns} data={fakeData} />
		</Styles>
	);
}
