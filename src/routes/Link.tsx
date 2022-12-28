import React from "react"
import classNames from "classnames"
import { LinkProps } from "../models/routes.model"
import useNavigation from "../hooks/useNavigation"

const Link = ({
	to,
	children,
	className,
	activeClassName,
}: LinkProps) => {
	const { navigate, currentPath } = useNavigation()

	const classes = classNames(
		"text-blue-500 ",
		className,
		currentPath === to && activeClassName
	)

	const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
		if (event.metaKey || event.ctrlKey) return
		event.preventDefault()
		navigate(to)
	}

	return (
		<a className={classes} onClick={handleClick} href={to}>
			{children}
		</a>
	)
}

export default Link
