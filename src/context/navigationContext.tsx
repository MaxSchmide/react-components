import { createContext, useEffect, useState } from "react"

const NavigationContext = createContext({} as NavigationContextType)

function NavigationProvider({ children }: NavigationProviderProps) {
	const [currentPath, setCurrentPath] = useState(window.location.pathname)

	useEffect(() => {
		const handler = () => {
			setCurrentPath(window.location.pathname)
		}
		window.addEventListener("popstate", handler)
		return () => {
			window.removeEventListener("popstate", handler)
		}
	}, [])

	const navigate = (to: string) => {
		window.history.pushState({}, "", to)
		setCurrentPath(to)
	}

	return (
		<NavigationContext.Provider value={{ currentPath, navigate }}>
			{children}
		</NavigationContext.Provider>
	)
}

export { NavigationProvider }
export default NavigationContext

type NavigationProviderProps = {
	children: React.ReactNode
}

type NavigationContextType = {
	currentPath: string
	navigate: (to: string) => void
}
