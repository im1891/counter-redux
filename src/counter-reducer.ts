export type CounterReducerActionsTypes =
	| ReturnType<typeof isErrorAC>
	| ReturnType<typeof changeMaxCounterValueAC>
	| ReturnType<typeof changeMinCounterValueAC>
	| ReturnType<typeof setStartCounterValueAC>
	| ReturnType<typeof resetCounterAC>
	| ReturnType<typeof incrCounterAC>

export type CounterStateType = {
	counterValue: number | null
	maxCounterValue: number
	minCounterValue: number
	error: boolean
	displayMessage: string
}

const initialState: CounterStateType = {
	counterValue: null,
	maxCounterValue: 0,
	minCounterValue: 0,
	error: false,
	displayMessage: "Enter values and press 'set'"
}
export const counterReducer = (
	state: CounterStateType = initialState,
	action: CounterReducerActionsTypes
): CounterStateType => {
	switch (action.type) {
		case 'INCREMENT-COUNTER':
			if (
				state.counterValue !== null &&
				state.counterValue < state.maxCounterValue
			) {
				return { ...state, counterValue: state.counterValue + 1 }
			}
			return state

		case 'RESET-COUNTER':
			return { ...state, counterValue: 0 }

		case 'SET-START-COUNTER-VALUE':
			return { ...state, counterValue: state.minCounterValue }

		case 'CHANGE-MIN-COUNTER-VALUE':
			return {
				...state,
				minCounterValue: Math.floor(action.newMinCounterValue),
				counterValue: null
			}

		case 'CHANGE-MAX-COUNTER-VALUE':
			return {
				...state,
				maxCounterValue: Math.floor(action.newMaxCounterValue),
				counterValue: null
			}

		case 'IS-ERROR':
			if (
				state.minCounterValue < 0 ||
				state.maxCounterValue <= 0 ||
				state.minCounterValue >= state.maxCounterValue ||
				isNaN(state.minCounterValue) ||
				isNaN(state.maxCounterValue)
			) {
				return { ...state, error: true }
			}
			return { ...state, error: false }

		default:
			return state
	}
}

///// actions
export const incrCounterAC = () => ({ type: 'INCREMENT-COUNTER' } as const)
export const resetCounterAC = () => ({ type: 'RESET-COUNTER' } as const)
export const setStartCounterValueAC = () =>
	({ type: 'SET-START-COUNTER-VALUE' } as const)
export const changeMinCounterValueAC = (newMinCounterValue: number) =>
	({ type: 'CHANGE-MIN-COUNTER-VALUE', newMinCounterValue } as const)
export const changeMaxCounterValueAC = (newMaxCounterValue: number) =>
	({ type: 'CHANGE-MAX-COUNTER-VALUE', newMaxCounterValue } as const)
export const isErrorAC = () => ({ type: 'IS-ERROR' } as const)
