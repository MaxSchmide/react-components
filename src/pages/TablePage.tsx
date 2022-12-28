import SortableTable from "../components/SortableTable"
import { Config, TableData } from "../models/table.model"

const TablePage = () => {
	const data: TableData[] = [
		{ name: "Orange", color: "bg-orange-500", score: 5 },
		{ name: "Apple", color: "bg-red-500", score: 3 },
		{ name: "Banana", color: "bg-yellow-500", score: 4 },
		{ name: "Lime", color: "bg-green-500", score: 1 },
	]
	const config: Config[] = [
		{
			label: "Fruits",
			render: (rowData: TableData) => rowData.name,
			sortValue: (rowData: TableData) => rowData.name,
		},
		{
			label: "Color",
			render: (rowData: TableData) => (
				<div className={`p-3 m-2 ${rowData.color}`}></div>
			),
		},
		{
			label: "Score",
			render: (rowData: TableData) => rowData.score,
			sortValue: (rowData: TableData) => rowData.score,
		},
	]

	const keyFn = (rowData: TableData) => {
		return rowData.name
	}
	return (
		<div>
			<SortableTable data={data} config={config} keyFn={keyFn} />
		</div>
	)
}

export default TablePage
