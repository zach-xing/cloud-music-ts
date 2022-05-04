import React from "react";
import { SearchInput } from "./style";
import type { StyleProps } from "./style";
import useDebounce from "../../hooks/useDebounce";

interface BaseProps {
  type?: string;
  defaultValue: string;
  placeholder?: string;
  style?: object;
  onChange?: React.ChangeEventHandler<HTMLElement>;
}

type IProps = BaseProps & StyleProps;

/**
 * 自定义 input 组件
 * - onChange 默认有防抖功能
 */
const Input: React.FC<IProps> = (props) => {
  // 防抖
  const hanelChange = useDebounce(props.onChange!, 300);

  return (
    <SearchInput
      type={props.type || "text"}
      width={props.width || "100%"}
      onChange={hanelChange}
      placeholder={props.placeholder || ""}
      defaultValue={props.defaultValue}
      style={props.style}
    />
  );
};

export default Input;
