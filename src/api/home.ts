import request from "../utils/axios";

export function fetchPersonalized() {
  return request({
    url: "/personalized?limit=10",
    method: "GET",
  });
}