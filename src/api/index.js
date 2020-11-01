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
    url: "tsystem/news/web/" + data.id,
    method: "get"
  });
}

export function linkList(data) {
  return request({
    url: "/tsystem/link/web/list",
    method: "get",
    data
  });
}

export function recourseList(data) {
  return request({
    url: "/readsum/list",
    method: "get",
    data
  });
}

export function organWeb(data) {
  return request({
    url: "/plat/organ/web/" + data.id,
    method: "get"
  });
}


