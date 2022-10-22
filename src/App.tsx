import React from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { AppStateType } from "./store";
import { CounterStateType } from "./counter-reducer";
import { Settings } from "./component/settings/Settings";
import { Counter } from "./component/counter/Counter";

export function App() {
  const dispatch = useDispatch();

  const counterData = useSelector<AppStateType, CounterStateType>(
    (state) => state.counterData
  );

  /*
            useEffect(() => {
              const data = localStorage.getItem("data");
  
              if (data) {
                setMinCounterValue(JSON.parse(data).minValue);
                setMaxCounterValue(JSON.parse(data).maxValue);
                setCounterValue(JSON.parse(data).count);
              }
            }, []);
          */

  /*  useEffect(() => {
              const data = {
                minValue: minCounterValue,
                maxValue: maxCounterValue,
                count: counterValue,
              };
  
              localStorage.setItem("data", JSON.stringify(data));
            }, [minCounterValue, maxCounterValue, counterValue]);*/

  return (
    <div className="appWrapper">
      <Settings
        dispatch={dispatch}
        error={counterData.error}
        counterValue={counterData.counterValue}
        maxCounterValue={counterData.maxCounterValue}
        minCounterValue={counterData.minCounterValue}
      />

      <Counter
        dispatch={dispatch}
        error={counterData.error}
        counterValue={counterData.counterValue}
        minCounterValue={counterData.minCounterValue}
        maxCounterValue={counterData.maxCounterValue}
        displayMessage={counterData.displayMessage}
      />
    </div>
  );
}
