import React, { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import s from "./button.module.css";

type DefaultButtonType = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

type PropsType = DefaultButtonType;
export const Button: React.FC<PropsType> = ({ className, ...rest }) => {
  const classes = `${s.btn} ${className}`;

  return <button className={classes} {...rest} />;
};
