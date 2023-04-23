import React, { Component, ButtonHTMLAttributes } from "react";
import "./Button.scss";
import classnames from "classnames";
export type ButtonType =
  | "default"
  | "primary"
  | "secondary"
  | "success"
  | "error"
  | "link";
type ButtonStyle = "outlined" | "container";
type ButtonSize = "small" | "normal" | "large";
type ButtonShape = "circle" | "square";

export interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLElement>, "type" | "disabled"> {
  type?: ButtonType;
  variant?: ButtonStyle;
  size?: ButtonSize | string;
  children?: string;
  disabled?: boolean;
  anime?: boolean;
  shape?: ButtonShape;
  onClick?: () => void;
}

const prefixCls = "LanM-btn";

export default class Button extends Component<ButtonProps> {
  static defaultProps = {
    type: "default",
    variant: "container",
    size: "normal",
    disabled: false,
    anime: false,
    shape: "square",
  };

  render() {
    const {
      type,
      onClick,
      variant,
      size,
      disabled,
      shape,
      anime,
      ...restprops
    } = this.props;
    const btnClassName = classnames(prefixCls, {
      button: true,
      [`button-${type}-${variant}`]: true,
      [`button-${size}`]: true,
      [`button-disabled-${disabled}`]: true,
      [`button-anime-${anime}`]: true,
      [`button-${size}-${shape}`]: true,
    });
    return (
      <button className={btnClassName} onClick={onClick} {...restprops}>
        {this.props.children}
      </button>
    );
  }
}
