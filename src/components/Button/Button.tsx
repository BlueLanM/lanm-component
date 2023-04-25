import React, { Component, ButtonHTMLAttributes } from "react";
import "./Button.scss";
import classnames from "classnames";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import Icon, { ThemeProps } from "../Icon/Icon";
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
   * 添加图标到标题后
   */
  icon?: IconProp;
  /**
   * 图标主题
   */
  theme?: ThemeProps;
  /**
   * 加载状态
   */
  loading?: boolean;
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
    const {
      type,
      variant,
      size,
      disabled,
      shape,
      anime,
      loading,
      icon,
      theme,
      ...restprops
    } = this.props;
    const btnClassName = classnames(prefixCls, {
      // button: true,
      [`${prefixCls}-${type}-${variant}`]: true,
      [`${prefixCls}-${size}`]: true,
      [`${prefixCls}-disabled-${disabled}`]: true,
      [`${prefixCls}-anime-${anime}`]: true,
      [`${prefixCls}-loading`]: loading,
      [`${prefixCls}-${size}-${shape}`]: true,
    });
    return (
      <button className={btnClassName} {...restprops}>
        {loading ? (
          <Icon icon="spinner" theme={theme} style={{ marginRight: 5 }} />
        ) : icon ? (
          <Icon icon={icon} theme={theme} style={{ marginRight: 5 }} />
        ) : null}
        {this.props.children}
      </button>
    );
  }
}
