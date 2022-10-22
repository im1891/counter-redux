export type CounterReducerActionsTypes =
  | IncrCounterACType
  | ResetCounterACType
  | setStartCounterValueACType
  | ChangeMinCounterValueACType
  | ChangeMaxCounterValueACType
  | IsErrorACType;

type IncrCounterACType = ReturnType<typeof incrCounterAC>;
type ResetCounterACType = ReturnType<typeof resetCounterAC>;
type setStartCounterValueACType = ReturnType<typeof setStartCounterValueAC>;
type ChangeMinCounterValueACType = ReturnType<typeof changeMinCounterValueAC>;
type ChangeMaxCounterValueACType = ReturnType<typeof changeMaxCounterValueAC>;
type IsErrorACType = ReturnType<typeof isErrorAC>;

export type CounterStateType = {
  counterValue: number | null;
  maxCounterValue: number;
  minCounterValue: number;
  error: boolean;
  displayMessage: string;
};

const initialState: CounterStateType = {
  counterValue: null,
  maxCounterValue: 5,
  minCounterValue: 0,
  error: false,
  displayMessage: "Enter values and press 'set'",
};
export const counterReducer = (
  state: CounterStateType = initialState,
  action: CounterReducerActionsTypes
) => {
  switch (action.type) {
    case "INCREMENT-COUNTER": {
      if (
        state.counterValue !== null &&
        state.counterValue < state.maxCounterValue
      ) {
        state = { ...state, counterValue: state.counterValue + 1 };
      }
      return state;
    }
    case "RESET-COUNTER": {
      return { ...state, counterValue: 0 };
    }

    case "SET-START-COUNTER-VALUE": {
      return { ...state, counterValue: state.minCounterValue };
    }

    case "CHANGE-MIN-COUNTER-VALUE": {
      return {
        ...state,
        minCounterValue: Math.floor(action.payload.newMinCounterValue),
        counterValue: null,
      };
    }
    case "CHANGE-MAX-COUNTER-VALUE": {
      return {
        ...state,
        maxCounterValue: Math.floor(action.payload.newMaxCounterValue),
        counterValue: null,
      };
    }
    case "IS-ERROR": {
      if (
        state.minCounterValue < 0 ||
        state.maxCounterValue <= 0 ||
        state.minCounterValue >= state.maxCounterValue ||
        isNaN(state.minCounterValue) ||
        isNaN(state.maxCounterValue)
      ) {
        state = { ...state, error: true };
      } else state = { ...state, error: false };
      return state;
    }
    default:
      return state;
  }
};

export const incrCounterAC = () => {
  return {
    type: "INCREMENT-COUNTER",
  } as const;
};

export const resetCounterAC = () => {
  return {
    type: "RESET-COUNTER",
  } as const;
};

export const setStartCounterValueAC = () => {
  return {
    type: "SET-START-COUNTER-VALUE",
  } as const;
};

export const changeMinCounterValueAC = (newMinCounterValue: number) => {
  return {
    type: "CHANGE-MIN-COUNTER-VALUE",
    payload: {
      newMinCounterValue,
    },
  } as const;
};

export const changeMaxCounterValueAC = (newMaxCounterValue: number) => {
  return {
    type: "CHANGE-MAX-COUNTER-VALUE",
    payload: {
      newMaxCounterValue,
    },
  } as const;
};

export const isErrorAC = () => {
  return {
    type: "IS-ERROR",
  } as const;
};
