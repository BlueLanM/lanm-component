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
  /**
   * 设置按钮额外的样式
   */
  className?: string;
  /**
   * 设置按钮的类型
   */
  type?: ButtonType;
  /**
   * 设置按钮风格
   */
  variant?: ButtonStyle;
  /**
   * 设置按钮尺寸
   */
  size?: ButtonSize | string;
  /**
   * 按钮内容
   */
  children?: string;
  /**
   * 设置按钮不可用状态
   */
  disabled?: boolean;
  /**
   * 设置按钮动画效果
   */
  anime?: boolean;
  /**
   * 设置按钮形状
   */
  shape?: ButtonShape;
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
    const { type, variant, size, disabled, shape, anime, ...restprops } =
      this.props;
    const btnClassName = classnames(prefixCls, {
      button: true,
      [`button-${type}-${variant}`]: true,
      [`button-${size}`]: true,
      [`button-disabled-${disabled}`]: true,
      [`button-anime-${anime}`]: true,
      [`button-${size}-${shape}`]: true,
    });
    return (
      <button className={btnClassName} {...restprops}>
        {this.props.children}
      </button>
    );
  }
}
