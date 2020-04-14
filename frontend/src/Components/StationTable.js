// Feikkitaulukko asemista react-tablen paginaatiota varten

import React from "react";

import styled from "styled-components";
import Table from "./Table";
import fakeData from "./Data/fakeData.json";

const Styles = styled.div`
	padding: 1rem;
	margin-top: 5%;
	margin-left: 5%;
	margin-bottom: 5%;

	.stationTable {
		margin-top: 1%;
		margin-left: 5%;
		text-align: left;
		font-size: 24px;
	}

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
				accessor: (d) => d.passengerTraffic.toString(),
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

	return (
		<Styles>
			<p className="stationTable">
				Epäonnistuneiden ominaisuuksien (pagination & search) muistosivu
			</p>
			<Table columns={columns} data={fakeData} />
		</Styles>
	);
}
