import {
  changeMaxCounterValueAC,
  changeMinCounterValueAC,
  counterReducer,
  CounterStateType,
  incrCounterAC,
  isErrorAC,
  resetCounterAC,
  setStartCounterValueAC,
} from "./counter-reducer";

let initialState: CounterStateType;

beforeEach(() => {
  initialState = {
    counterValue: 3,
    maxCounterValue: 5,
    minCounterValue: 1,
    error: false,
    displayMessage: "Enter values and press 'set'",
  };
});

test("counter value should be incremented", () => {
  const newInitialState = counterReducer(initialState, incrCounterAC());

  const newInitialStateKeys = Object.keys(newInitialState);

  expect(newInitialStateKeys.length).toBe(5);
  expect(initialState.counterValue).toBe(3);
  expect(newInitialState.counterValue).toBe(4);
  expect(newInitialState.maxCounterValue).toEqual(initialState.maxCounterValue);
  expect(newInitialState.minCounterValue).toEqual(initialState.minCounterValue);
  expect(initialState).not.toEqual(newInitialState);
});

test("counter value should be reset", () => {
  const newInitialState = counterReducer(initialState, resetCounterAC());

  const newInitialStateKeys = Object.keys(newInitialState);

  expect(newInitialStateKeys.length).toBe(5);
  expect(initialState.counterValue).toBe(3);
  expect(newInitialState.counterValue).toBe(0);
  expect(newInitialState.minCounterValue).toEqual(initialState.minCounterValue);
  expect(newInitialState.maxCounterValue).toEqual(initialState.maxCounterValue);
  expect(initialState).not.toEqual(newInitialState);
});

test("start counter value should be set", () => {
  const newInitialState = counterReducer(
    initialState,
    setStartCounterValueAC()
  );

  const newInitialStateKeys = Object.keys(newInitialState);

  expect(newInitialStateKeys.length).toBe(5);
  expect(newInitialState.counterValue).toBe(1);
  expect(newInitialState.counterValue).toBe(newInitialState.minCounterValue);
  expect(newInitialState.counterValue).toBe(initialState.minCounterValue);
  expect(initialState).not.toEqual(newInitialState);
});

test("max counter value should be changed", () => {
  const newInitialState = counterReducer(
    initialState,
    changeMaxCounterValueAC(10)
  );

  const newInitialStateKeys = Object.keys(newInitialState);

  expect(newInitialStateKeys.length).toBe(5);
  expect(newInitialState.maxCounterValue).toBe(10);
  expect(initialState.maxCounterValue).toBe(5);
  expect(initialState.minCounterValue).toBe(1);
  expect(initialState.counterValue).toBe(3);
});

test("min counter value should be changed", () => {
  const newInitialState = counterReducer(
    initialState,
    changeMinCounterValueAC(3)
  );

  const newInitialStateKeys = Object.keys(newInitialState);

  expect(newInitialStateKeys.length).toBe(5);
  expect(newInitialState.minCounterValue).toBe(3);
  expect(initialState.maxCounterValue).toBe(5);
  expect(initialState.minCounterValue).toBe(1);
  expect(initialState.counterValue).toBe(3);
});

test("error shoul be true", () => {
  let newInitialState = counterReducer(
    initialState,
    changeMinCounterValueAC(5)
  );

  newInitialState = counterReducer(newInitialState, isErrorAC());

  const newInitialStateKeys = Object.keys(newInitialState);

  expect(newInitialStateKeys.length).toBe(5);
  expect(newInitialState.minCounterValue).toBe(5);
  expect(newInitialState.maxCounterValue).toBe(5);
  expect(initialState.maxCounterValue).toBe(5);
  expect(initialState.minCounterValue).toBe(1);
  expect(newInitialState.error).toBeTruthy();
  expect(initialState.error).toBeFalsy();
});
