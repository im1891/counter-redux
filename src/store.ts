import {
  combineReducers,
  legacy_createStore as createStore,
  Store,
} from "redux";
import { counterReducer, CounterReducerActionsTypes } from "./counter-reducer";

type ActionsTypes = CounterReducerActionsTypes;
export type AppStateType = ReturnType<typeof rootReducer>;
type StoreType = Store<AppStateType, ActionsTypes>;

const rootReducer = combineReducers({
  counterData: counterReducer,
});

export const store: StoreType = createStore(rootReducer);

// @ts-ignore
window.store = store;
