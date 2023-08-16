import React from 'react'
import './App.css'
import { useDispatch } from 'react-redux'
import { useAppSelector } from './store'
import { Settings } from './component/settings/Settings'
import { Counter } from './component/counter/Counter'

export function App() {
	const dispatch = useDispatch()

	const counter = useAppSelector((state) => state.counter)

	return (
		<div className="appWrapper">
			<Settings
				dispatch={dispatch}
				error={counter.error}
				counterValue={counter.counterValue}
				maxCounterValue={counter.maxCounterValue}
				minCounterValue={counter.minCounterValue}
			/>

			<Counter
				dispatch={dispatch}
				error={counter.error}
				counterValue={counter.counterValue}
				minCounterValue={counter.minCounterValue}
				maxCounterValue={counter.maxCounterValue}
				displayMessage={counter.displayMessage}
			/>
		</div>
	)
}
