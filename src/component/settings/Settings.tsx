import React, { ChangeEvent } from "react";
import s from "./Settings.module.css";
import { Button } from "../button/Button";
import {
  changeMaxCounterValueAC,
  changeMinCounterValueAC,
  isErrorAC,
  setStartCounterValueAC,
} from "../../counter-reducer";
import { Dispatch } from "redux";

type SettingsPropsType = {
  dispatch: Dispatch;
  error: boolean;
  counterValue: number | null;
  maxCounterValue: number;
  minCounterValue: number;
};

export const Settings: React.FC<SettingsPropsType> = (props) => {
  const { dispatch, error, counterValue, maxCounterValue, minCounterValue } =
    props;

  const inputClasses = error ? s.error : s.input;
  const isButtonDisabled = error || counterValue !== null;

  const setStartCounterValue = () => {
    dispatch(setStartCounterValueAC());
  };

  const changeMinCounterValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(changeMinCounterValueAC(e.currentTarget.valueAsNumber));
    dispatch(isErrorAC());
  };

  const changeMaxCounterValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(changeMaxCounterValueAC(e.currentTarget.valueAsNumber));
    dispatch(isErrorAC());
  };

  const onKeyDownInputHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === ".") {
      e.preventDefault();
    }
    if (e.key === "Enter") {
      setStartCounterValue();
    }
  };

  return (
    <div className={s.counterSettings}>
      <div className={s.options}>
        <div className={s.item}>
          <label htmlFor={"max-value"}>Max value</label>
          <input
            type="number"
            value={maxCounterValue.toString()}
            onChange={changeMaxCounterValueHandler}
            onKeyDown={onKeyDownInputHandler}
            className={inputClasses}
            id={"max-value"}
          />
        </div>
        <div className={s.item}>
          <label htmlFor={"min-value"}>Start value</label>
          <input
            type="number"
            value={minCounterValue.toString()}
            onChange={changeMinCounterValueHandler}
            onKeyDown={onKeyDownInputHandler}
            className={inputClasses}
            id={"min-value"}
          />
        </div>
      </div>
      <div className={s.buttonBlockWrapper}>
        <Button onClick={setStartCounterValue} disabled={isButtonDisabled}>
          Set
        </Button>
      </div>
    </div>
  );
};
