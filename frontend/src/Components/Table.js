import React, { useState } from "react";
import { useTable, useFilters, useSortBy } from "react-table";

export default function Table({ columns, data }) {
	// Use the state and functions returned from useTable to build your UI
	// Use the useTable Hook to send the columns and data to build the table
	const {
		getTableProps, // table props from react-table
		getTableBodyProps, // table body props from react-table
		headerGroups, // headerGroups if your table have groupings
		rows, // rows for the table based on the data passed
		prepareRow, // Prepare the row (this function need to called for each row before getting the row props)
	} = useTable(
		{
			columns,
			data,
		},
		useFilters, // Adding the useFilters Hook to the table
		useSortBy, // This plugin Hook will help to sort our table columns
		// You can add as many Hooks as you want. Check the documentation for details. You can even add custom Hooks for react-table here
	);

	// Table header styling and props to allow sorting

	/*	
    Render the UI for your table
    - react-table doesn't have UI, it's headless. We just need to put the react-table props from the Hooks, and it will do its magic automatically
*/

	return (
		<>
			<table {...getTableProps()}>
				<thead>
					{headerGroups.map((headerGroup) => (
						<tr {...headerGroup.getHeaderGroupProps()}>
							{headerGroup.headers.map((column) => (
								<th
									{...column.getHeaderProps(column.getSortByToggleProps())}
									className={
										column.isSorted
											? column.isSortedDesc
												? "sort-desc"
												: "sort-asc"
											: ""
									}
								>
									{column.render("Header")}
								</th>
							))}
						</tr>
					))}
				</thead>
				<tbody {...getTableBodyProps()}>
					{rows.map((row, i) => {
						prepareRow(row); // This line is necessary to prepare the rows and get the row props from react-table dynamically

						// Each row can be rendered directly as a string using the react-table render method

						return (
							<tr {...row.getRowProps()}>
								{row.cells.map((cell) => {
									return (
										<td {...cell.getCellProps()}>{cell.render("Cell")}</td>
									);
								})}
							</tr>
						);
					})}
				</tbody>
			</table>
		</>
	);
}
