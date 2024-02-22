import React from "react";
import style from "./Button.module.scss";

export class Button extends React.Component<{
  children: any;
  type?: "button" | "submit" | "reset" | undefined;
}> {
  render() {
    const { type = "button" } = this.props;
    return (
      <button type={type} className={style.btn}>
        {this.props.children}
      </button>
    );
  }
}
