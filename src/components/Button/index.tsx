import React from "react";
import { StyleButton } from "./style";
import type { StyleProps } from "./style";

/**
 * 基本 Button 的 props
 */
interface BaseButtonProps {
  children: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
}

type ButtonProps = BaseButtonProps & StyleProps;

/**
 * 按钮组件
 * @param size 按钮尺寸 default、block
 * @param danger 是否是危险按钮 boolean
 * @returns 按钮组件
 */
const Botton = (props: ButtonProps) => {
  return (
    <StyleButton
      size={props.size || "default"}
      danger={props.danger || false}
      onClick={props.onClick}
    >
      {props.children}
    </StyleButton>
  );
};

export default Botton;
