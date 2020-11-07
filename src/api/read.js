import request from "@/utils/request";

export function readHistoryList(data) {
  return request({
    url: "/product/readhistory/list",
    method: "get",
    data
  });
}

export function deleteReadHistory(data) {
  return request({
    url: "/product/readhistory/" + data.id,
    method: "delete"
  });
}

export function addReadHistory(data) {
  return request({
    url: "/product/readhistory",
    method: "post",
    data
  });
}

export function booksType(data) {
  return request({
    url: "tproBook/type",
    method: "get",
    data
  });
}
