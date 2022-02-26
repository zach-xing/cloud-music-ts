import { TagSpan } from "./style";

interface IProps {
  showText: string;
}

/**
 * 标签样式
 */
const Tag = (props: IProps) => {
  return <TagSpan>{props.showText}</TagSpan>;
};

export default Tag;
