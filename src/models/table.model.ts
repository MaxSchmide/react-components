export interface TableProps {
	data: TableData[]
	config: Config[]
	keyFn?: (param: TableData) => React.Key
}

export type TableData = {
	name: string
	color: string
	score: number
}
export type Config = {
	label: string
	render: (data: TableData) => React.ReactNode
	header?: () => JSX.Element
	sortValue?: (param: TableData) => string | number
}
