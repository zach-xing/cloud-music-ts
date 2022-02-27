import moment from "moment";

/**
 * 日期
 * @param timestamp 时间戳
 * @returns YYYY-MM-DD 形式的日期字符串
 */
export function toDate(timestamp: number): string {
  moment(timestamp).format("YYYY-MM-DD");
  console.log(moment(timestamp).format("YYYY-MM-DD"));
  return moment(timestamp).format("YYYY-MM-DD");
}
