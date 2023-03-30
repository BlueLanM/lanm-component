import React, { Component } from "react";
import "./button.scss";
import classnames from "classnames";
type ButtonType = "default" | "primary" | "secondary" | "success" | "error";
type ButtonStyle = "outlined" | "container";
type ButtonSize = "small" | "normal" | "large";
type ButtonShape = "circle" | "square";

interface Props {
  type?: ButtonType;
  variant?: ButtonStyle;
  size?: ButtonSize;
  children?: string;
  disabled?: Boolean;
  shape?: ButtonShape;
  onClick?: () => void;
}

export default class Button extends Component<Props> {
  static defaultProps = {
    type: "default",
    variant: "container",
    size: "normal",
    disabled: "false",
    shape: "square",
  };

  render() {
    const { type, onClick, variant, size, disabled, shape } = this.props;
    const btnClassName = classnames({
      "button ": true,
      [`button-${type}-${variant}`]: true,
      [`button-${size}`]: true,
      [`button-disabled-${disabled}`]: true,
      [`button-${shape}`]: true,
    });
    return (
      <button className={btnClassName} onClick={onClick}>
        {this.props.children}
      </button>
    );
  }
}
