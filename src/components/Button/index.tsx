import React from "react";
import style from "./Button.module.scss";

export class Button extends React.Component<{ children: any }> {
  render() {
    return <button className={style.btn}>{this.props.children}</button>;
  }
}
