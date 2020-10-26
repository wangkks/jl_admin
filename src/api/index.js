import request from "@/utils/request";

export function tProDatabase(data) {
  return request({
    url: "tProDatabase/list",
    method: "get",
    data
  });
}

export function pagList(data) {
  return request({
    url: "tproBook/pagList",
    method: "get",
    data
  });
}

export function newsList(data) {
  return request({
    url: "tsystem/news/web/list",
    method: "get",
    data
  });
}

export function newsDetail(data) {
  return request({
    url: "tsystem/news/web/id",
    method: "get",
    data
  });
}
