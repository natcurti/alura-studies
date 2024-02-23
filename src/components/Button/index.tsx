import React from "react";
import style from "./Button.module.scss";

export class Button extends React.Component<{
  children: any;
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
}> {
  render() {
    const { type = "button", onClick } = this.props;
    return (
      <button type={type} className={style.btn} onClick={onClick}>
        {this.props.children}
      </button>
    );
  }
}
