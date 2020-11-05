import request from "@/utils/request";

export function feedbackList(data) {
  return request({
    url: "tsystem/feedback/web/list",
    method: "get",
    data
  });
}

export function feedbackCount(data) {
  return request({
    url: "tsystem/feedback/web/getCount",
    method: "get",
    data
  });
}

export function feedbackDel(data) {
  return request({
    url: "tsystem/feedback/web/" + data.id,
    method: "delete"
  });
}
