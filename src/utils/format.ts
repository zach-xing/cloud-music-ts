import moment from "moment";

/**
 * 日期
 * @param timestamp 时间戳
 * @param format 格式形式
 * @returns 日期字符串
 */
export function toDate(
  timestamp: number,
  format: string = "YYYY-MM-DD"
): string {
  return moment(timestamp).format(format);
}
