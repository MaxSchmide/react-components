import { GoArrowSmallDown, GoArrowSmallUp } from "react-icons/go"
import useSort from "../hooks/useSort"
import { TableProps } from "../models/table.model"
import Table from "./Table"

const SortableTable = (props: TableProps) => {
	const { config, data } = props
	const { sortBy, sortOrder, sortedData, sortByLabel } = useSort(data, config)
	const updatedConfig = config.map((column) => {
		if (!column.sortValue) return column
		return {
			...column,
			header: () => (
				<th
					className="cursor-pointer hover:bg-gray-100 select-none"
					onClick={() => sortByLabel(column.label)}
				>
					<div className="flex items-center">
						{getIcons(column.label, sortBy, sortOrder)}
						{column.label}
					</div>
				</th>
			),
		}
	})

	return <Table {...props} data={sortedData} config={updatedConfig} />
}

const getIcons = (
	label: string,
	sortBy: string | null,
	sortOrder: string | null
): any => {
	if (label !== sortBy) {
		return (
			<div>
				<GoArrowSmallUp />
				<GoArrowSmallDown />
			</div>
		)
	}
	if (sortOrder === null) {
		return (
			<div>
				<GoArrowSmallUp />
				<GoArrowSmallDown />
			</div>
		)
	} else if (sortOrder === "asc") {
		return (
			<div>
				<GoArrowSmallUp />
			</div>
		)
	} else if (sortOrder === "desc") {
		return (
			<div>
				<GoArrowSmallDown />
			</div>
		)
	}
}

export default SortableTable
