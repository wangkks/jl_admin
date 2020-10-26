import request from "@/utils/request";

export function newsList(data) {
  console.log("data", data);
  return request({
    url: "tsystem/news/web/list",
    method: "get",
    data
  });
}

export function newsDetail(data) {
  return request({
    url: "tsystem/news/web",
    method: "get",
    data
  });
}
