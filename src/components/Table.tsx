import { Fragment } from "react"
import { TableProps } from "../models/table.model"

const Table = ({ data, config, keyFn }: TableProps) => {
	const renderedHeaders = config.map((column) => {
		if (column.header)
			return <Fragment key={column.label}>{column.header()}</Fragment>

		return <th key={column.label}>{column.label}</th>
	})

	const renderedRows = data.map((rowData) => {
		const renderedCells = config.map((col) => {
			return (
				<td className="p-3" key={col.label}>
					{col.render(rowData)}
				</td>
			)
		})
		return (
			<tr className="border-b" key={keyFn?.(rowData)}>
				{renderedCells}
			</tr>
		)
	})
	return (
		<table className="table-auto border-spacing-2">
			<thead>
				<tr className="border-b-2">{renderedHeaders}</tr>
			</thead>
			<tbody>{renderedRows}</tbody>
		</table>
	)
}

export default Table
