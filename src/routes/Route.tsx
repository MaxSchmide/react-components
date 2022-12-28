import useNavigation from "../hooks/useNavigation"
import { RouteProps } from "../models/routes.model"

function Route({ path, children }: RouteProps) {
	const { currentPath } = useNavigation()
	if (path === currentPath) return children

	return null
}

export default Route
