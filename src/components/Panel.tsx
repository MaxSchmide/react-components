import React from "react"
import classNames from "classnames"
import { PanelProps } from "../models/panel.model"

const Panel = ({ children, className, ...rest }: PanelProps) => {
	const finalClassNames = classNames(
		"border rounded p-3 shadow bg-white w-full",
		className
	)
	return (
		<div {...rest} className={finalClassNames}>
			{children}
		</div>
	)
}

export default Panel
