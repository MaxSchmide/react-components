import { useState } from "react"
import { Config, TableData } from "../models/table.model"

const useSort = (data: TableData[], config: Config[]) => {
	const [sortOrder, setSortOrder] = useState<string | null>(null)
	const [sortBy, setSortBy] = useState<string | null>(null)

	const sortByLabel = (label: string) => {
		if (sortBy && label !== sortBy) {
			setSortOrder("asc")
			setSortBy(label)
			return
		}

		if (sortOrder === null) {
			setSortOrder("asc")
			setSortBy(label)
		} else if (sortOrder === "asc") {
			setSortOrder("desc")
			setSortBy(label)
		} else if (sortOrder === "desc") {
			setSortOrder(null)
			setSortBy(null)
		}
	}

	let sortedData = data
	if (sortOrder && sortBy) {
		const { sortValue } = config.find(
			(column) => column.label === sortBy
		) as Config
		sortedData = [...data].sort((a: TableData, b: TableData) => {
			const valueA = sortValue!(a)
			const valueB = sortValue!(b)
			const reverseORder = sortOrder === "asc" ? 1 : -1
			if (typeof valueA === "string") {
				return valueA.localeCompare(valueB as string) * reverseORder
			} else {
				return (valueA - (valueB as number)) * reverseORder
			}
		})
	}
	return { sortBy, sortOrder, sortByLabel, sortedData }
}
export default useSort
