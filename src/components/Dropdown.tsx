import React, { useState, useEffect, useRef } from "react"
import { DropdownProps, Option } from "../models/dropdown.model"
import { GoChevronDown } from "react-icons/go"
import Panel from "./Panel"

const Dropdown = ({ options, value, onChange }: DropdownProps) => {
	const [isOpen, setIsOpen] = useState(false)
	const divRef = useRef<HTMLDivElement>(null)
	useEffect(() => {
		const handler = (event: MouseEvent) => {
			if (!divRef.current) return
			if (!divRef?.current?.contains(event.target as HTMLElement)) {
				setIsOpen(false)
			}
		}
		document.addEventListener("click", handler, true)
		return () => {
			document.removeEventListener("click", handler)
		}
	}, [])

	const handleClick = () => {
		setIsOpen((current) => !current)
	}
	const handleOptionClick = (option: Option) => {
		setIsOpen(false)
		onChange(option)
	}

	const renderedOptions = options.map((opt) => {
		return (
			<div
				className="hover:bg-sky-100 rounded cursor-pointer p-1"
				onClick={() => handleOptionClick(opt)}
				key={opt.value}
			>
				{opt.label}
			</div>
		)
	})

	return (
		<div ref={divRef} className="w-48 relative ">
			<label> Select a color</label>
			<Panel
				className="flex justify-between items-center cursor-pointer"
				onClick={handleClick}
			>
				{value?.label || "Select..."}
				<GoChevronDown className="text-lg" />
			</Panel>
			{isOpen && <Panel className="absolute top-full">{renderedOptions}</Panel>}
		</div>
	)
}

export default Dropdown
