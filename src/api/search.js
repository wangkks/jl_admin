import request from "@/utils/request";

export function searchHistory(data) {
  return request({
    url: "/search/history/list",
    method: "get",
    data
  });
}

export function deleteSearchHistory(data) {
  return request({
    url: "/search/history",
    method: "delete",
    data
  });
}
