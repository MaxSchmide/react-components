import { useState, useEffect } from "react"
const useCount = (initialCount: number) => {
	const [count, setCount] = useState(initialCount)
	const increment = () => {
		setCount((prev) => prev + 1)
	}
	const decrement = () => {
		setCount((prev) => prev - 1)
	}
	useEffect(() => {
		console.log(count)
	}, [count])
	return { count, increment, decrement }
}

export default useCount
