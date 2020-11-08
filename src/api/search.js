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
    url: "/search/history/" + data.id,
    method: "delete"
  });
}

export function searchAllList(data) {
  return request({
    url: "/search/advancedsearch/list",
    method: "post",
    data
  });
}

export function searchAllBook(data) {
  return request({
    url: "/search/advancedsearch/booklist",
    method: "post",
    data
  });
}