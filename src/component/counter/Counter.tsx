import React from 'react'
import { Display } from '../display/Display'
import { Button } from '../button/Button'
import s from './Counter.module.css'
import { Dispatch } from 'redux'
import { incrCounterAC, resetCounterAC } from '../../counter-reducer'

type CounterPropsType = {
	dispatch: Dispatch
	counterValue: number | null
	minCounterValue: number
	maxCounterValue: number
	error: boolean
	displayMessage: string
}

export const Counter: React.FC<CounterPropsType> = (props) => {
	const {
		dispatch,
		counterValue,
		minCounterValue,
		maxCounterValue,
		error,
		displayMessage
	} = props

	const buttonsDisabled = counterValue === null

	const isIncrDisabled = counterValue === maxCounterValue || buttonsDisabled
	const isResetDisabled = counterValue === minCounterValue || buttonsDisabled

	const incrCounterHandler = () => {
		dispatch(incrCounterAC())
	}

	const resetCounterHandler = () => {
		dispatch(resetCounterAC())
	}

	return (
		<div className={s.counter}>
			<Display
				counterValue={counterValue}
				maxCounterValue={maxCounterValue}
				error={error}
				displayMessage={displayMessage}
			/>

			<div className={s.buttonBlockWrapper}>
				<Button onClick={incrCounterHandler} disabled={isIncrDisabled}>
					Increment
				</Button>
				<Button onClick={resetCounterHandler} disabled={isResetDisabled}>
					Reset
				</Button>
			</div>
		</div>
	)
}
