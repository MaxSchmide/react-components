export interface ButtonProps {
	children?: React.ReactNode
	primary?: boolean
	secondary?: boolean
	success?: boolean
	warning?: boolean
	danger?: boolean
	outline?: boolean
	rounded?: boolean
	onClick?: React.MouseEventHandler<HTMLButtonElement>
	[rest: string]: any
}
