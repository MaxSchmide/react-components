export interface DropdownProps {
	options: Option[]
	value: Option | null
	onChange: (option: Option) => void
}

export type Option = {
	label: string
	value: string
}
