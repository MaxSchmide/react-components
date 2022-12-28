import { useReducer } from "react"
import Button from "../components/Button"
import Panel from "../components/Panel"
import {
	CountAction,
	CountActionTypes,
	CountState,
} from "../models/reducer.model"

const reducer = (state: CountState, action: CountAction) => {
	switch (action.type) {
		case CountActionTypes.increase:
			return { ...state, count: state.count + 1 }
		case CountActionTypes.decrease:
			return { ...state, count: state.count - 1 }
		case CountActionTypes.changeValueToAdd:
			return { ...state, valueToAdd: action.payload! }
		case CountActionTypes.increaseBy:
			return { ...state, count: state.count + state.valueToAdd, valueToAdd: 0 }
		default:
			return state
	}
}

const CountPage = ({ initialCount }: { initialCount: number }) => {
	const [state, dispatch] = useReducer(reducer, {
		count: initialCount,
		valueToAdd: 0,
	})
	const increment = () => {
		dispatch({ type: CountActionTypes.increase })
	}
	const decrement = () => {
		dispatch({ type: CountActionTypes.decrease })
	}
	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const value = parseInt(event.target.value) || 0
		dispatch({
			type: CountActionTypes.changeValueToAdd,
			payload: value,
		})
	}
	const handleSubmit = (event: React.FormEvent) => {
		event.preventDefault()
		dispatch({ type: CountActionTypes.increaseBy })
	}
	return (
		<Panel className="m-3">
			<h1 className="text-lg">Current count: {state.count}</h1>
			<div className="flex gap-5 mt-4">
				<Button primary onClick={increment}>
					Increment
				</Button>
				<Button secondary onClick={decrement}>
					Decrement
				</Button>
			</div>
			<form onSubmit={handleSubmit}>
				<label htmlFor="count">Add a lot</label>
				<input
					value={state.valueToAdd || ""}
					onChange={handleChange}
					type="number"
					className="p-1 m-3 bg-gray-50 border border-gray-300"
					id="count"
				/>
				<Button success>Add</Button>
			</form>
		</Panel>
	)
}

export default CountPage
