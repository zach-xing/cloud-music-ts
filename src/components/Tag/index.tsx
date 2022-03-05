import { TagSpan } from "./style";

interface IProps {
  showText: string;
  active?: boolean;
  onClick?: (event: any) => void;
}

/**
 * 标签样式
 */
const Tag = (props: IProps) => {
  return <TagSpan active={!!props.active} onClick={props.onClick}>{props.showText}</TagSpan>;
};

export default Tag;
