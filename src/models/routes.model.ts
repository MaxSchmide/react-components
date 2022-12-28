export interface LinkProps {
	children: React.ReactNode
	to: string
	className?: string
	activeClassName?: string
}

export interface RouteProps {
	path: string
	children: JSX.Element
}
