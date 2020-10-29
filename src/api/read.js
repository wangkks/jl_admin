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
    url: "/product/readhistory",
    method: "DELETE",
    data
  });
}

export function addReadHistory(data) {
  return request({
    url: "/rproduct/readhistory",
    method: "POST",
    data
  });
}

