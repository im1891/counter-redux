import { combineReducers, legacy_createStore as createStore } from 'redux'
import { counterReducer } from './counter-reducer'
import { loadState, saveState } from './localStorage'
import _ from 'lodash'
import { TypedUseSelectorHook, useSelector } from 'react-redux'
import { composeWithDevTools } from '@redux-devtools/extension'

export type AppStateType = ReturnType<typeof rootReducer>

const rootReducer = combineReducers({
	counter: counterReducer
})

export const store = createStore(
	rootReducer,
	loadState(),
	composeWithDevTools()
)
store.subscribe(_.throttle(() => saveState(store.getState()), 1000))

export const useAppSelector: TypedUseSelectorHook<AppStateType> = useSelector

// @ts-ignore
window.store = store
