export enum CountActionTypes {
	increase = "INCREASE",
	decrease = "DECREASE",
	changeValueToAdd = "CHANGE_VALUE_TO_ADD",
	increaseBy = "INCREASE_BY",
}
export interface CountAction {
	type: CountActionTypes
	payload?: number
}
export interface CountState {
	count: number
	valueToAdd: number
}
