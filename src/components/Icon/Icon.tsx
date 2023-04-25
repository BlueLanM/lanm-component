import React, { Component } from "react";
import classNames from "classnames";
import "./Icon.scss";
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";

export type ThemeProps =
  | "primary"
  | "secondary"
  | "success"
  | "info"
  | "warning"
  | "danger"
  | "light"
  | "dark";

export interface IconProps extends FontAwesomeIconProps {
  /* 设置图标的主题 */
  theme?: ThemeProps;
}

export default class Icon extends Component<IconProps> {
  static defaultProps = {
    theme: "primary",
  };
  render() {
    const prefixCls = "LanM-icon";
    const { className, theme, icon, ...restProps } = this.props;
    const classes = classNames("LanM-icon", className, {
      [`icon-${theme}`]: theme,
      [`${prefixCls}-loading`]: icon === "spinner",
    });

    return <FontAwesomeIcon icon={icon} className={classes} {...restProps} />;
  }
}
