import React from "react";
import style from "./Button.module.scss";

interface IProps {
  children?: React.ReactNode;
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
}

export const Button = ({ children, type = "button", onClick }: IProps) => {
  return (
    <button type={type} className={style.btn} onClick={onClick}>
      {children}
    </button>
  );
};
