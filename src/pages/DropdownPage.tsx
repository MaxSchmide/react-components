import React, { useState } from "react"
import { Option } from "../models/dropdown.model"
import Dropdown from "../components/Dropdown"

const DropdownPage= () => {
	const [selection, setSelection] = useState<Option | null>(null)

	const handleSelect = (option: Option) => {
		setSelection(option)
	}

	const options = [
		{ label: "Red", value: "red" },
		{ label: "Green", value: "green" },
		{ label: "Blue", value: "blue" },
	]
	return (
		<>
			<Dropdown options={options} value={selection} onChange={handleSelect} />
		</>
	)
}

export default DropdownPage
